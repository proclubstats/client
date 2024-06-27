import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameDTO, GameStatus } from '../../shared/models/game.model';
import { Modal } from 'bootstrap';
import { NotificationService } from '../../services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from '../../shared/components/popup-dialog/popup-dialog.component';
import { GameDetailsComponent } from '../game-details/game-details.component';
import { ModifyGameComponent } from '../modify-game/modify-game.component';

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

  @Input() teamId: string | undefined = undefined;

  constructor(private gameService: GameService, private notificationService: NotificationService, private matDialog: MatDialog) { }

  ngOnInit() {
    this.isLoading = true;
    this.loadTeamGames();
  }

  async loadTeamGames() {
    if (this.teamId) {
      const response = await this.gameService.getTeamGames(this.teamId);

      if (response) {
        this.teamGamesData = response;
      }

      this.isLoading = false;
    }
  }

  onGameClick(selectedGame: GameDTO): void {
    if (this.currentEditedGameId === selectedGame.id) {
      return;
    }

    this.matDialog.open(PopupDialogComponent, { data: { components: [GameDetailsComponent, ModifyGameComponent], componentSwitchMode: true, componentParams: { selectedGameId: selectedGame.id } }, autoFocus: true, width: '1550px', height: '820px' });
  }

  onPageChange(event: any) {
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
      game.result = { homeTeamGoals: this.homeTeamGoals, awayTeamGoals: this.awayTeamGoals };
      //      this.loadFixtures();
    }


    this.currentEditedGameId = null;
  }
}
