import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameDTO, GameStatus } from '../../shared/models/game.model';
import { Modal } from 'bootstrap';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'team-games',
  templateUrl: './team-games.component.html',
  styleUrl: './team-games.component.scss'
})
export class TeamGamesComponent {
  GameStatus = GameStatus;
  isLoading: boolean = false;
  dateFormat = 'dd.MM.YYYY';
  teamGamesData: GameDTO[] | undefined = undefined;
  selectedGame: GameDTO | null = null;
  currentEditedGameId: string | null = null;
  homeTeamGoals: number = 0;
  awayTeamGoals: number = 0;
  editGame: boolean = false;

  @ViewChild('gameDetailsModal') modalRef!: ElementRef;

  @Input() teamId: string | undefined = undefined;

  constructor(private gameService: GameService, private notificationService: NotificationService){}

  ngOnInit() {
    this.loadTeamGames();
  }

  async loadTeamGames() {
    if (this.teamId) {
      const response = await this.gameService.getTeamGames(this.teamId);

      if (response) {
        this.teamGamesData = response;
      }
    }
  }

  onGameClick(selectedGame: GameDTO): void {
    if (this.currentEditedGameId === selectedGame.id) {
      return;
    }
    this.selectedGame = selectedGame;
    const modal = new Modal(this.modalRef.nativeElement);
    modal.show();
  }

  onPageChange(event: any) {
  }

  closeModal() {
    const modal = new Modal(this.modalRef.nativeElement);
    modal.hide();
  }

  onEditClick() {
    this.editGame = true;
  }

  onCancelClick() {
    this.editGame = false;
  }

  onEditGameResultClick(game: GameDTO) {
    if (game!.status !== GameStatus.SCHEDULED) {
      this.homeTeamGoals = game.result!.homeTeamGoals;
      this.awayTeamGoals = game.result!.awayTeamGoals;
    }
    else {
      this.homeTeamGoals = 0;
      this.awayTeamGoals = 0;
    }

    this.currentEditedGameId = game.id;
  }

  async onSaveClick(game: GameDTO) {
    const serverResponse = await this.gameService.updateGameResult(game.id, this.homeTeamGoals, this.awayTeamGoals);

    if (serverResponse) {
      this.notificationService.success(`Result: ${game.homeTeam.name} ${this.homeTeamGoals} : ${this.awayTeamGoals} ${game.awayTeam.name} updated successfuly`);
      game.status = GameStatus.PLAYED;
      game.result = {homeTeamGoals: this.homeTeamGoals,  awayTeamGoals:this.awayTeamGoals};
//      this.loadFixtures();
    }


    this.currentEditedGameId = null;
  }
}
