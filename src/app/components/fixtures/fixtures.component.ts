import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FixtureDTO, GameFixtureData, GameStatus } from '../../shared/models/game.model';
import { Modal } from 'bootstrap';
import { LeagueService } from '../../services/league.service';
import { LEAGUE_ID } from '../../constants/constants';
import { GameService } from '../../services/game.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'fixtures',
  templateUrl: './fixtures.component.html',
  styleUrl: './fixtures.component.scss'
})
export class FixturesComponent {
  GameStatus = GameStatus;
  fixtures: FixtureDTO[] | null = null;
  currentFixture: FixtureDTO | null = null;
  selectedGame: GameFixtureData | null = null;
  dateFormat = 'dd.MM.YYYY';
  isLoading: boolean = false;
  editGame: boolean = false;
  currentEditedGameId: string | null = null;
  homeTeamGoals: number = 0;
  awayTeamGoals: number = 0;

  @Input() hideTitle: boolean = false;

  @ViewChild('gameDetailsModal') modalRef!: ElementRef;

  constructor(private leagueService: LeagueService, private gameService: GameService,
     private notificationService: NotificationService) { }

  ngOnInit() {
    this.loadFixtures();
  }

  async loadFixtures() {
    this.isLoading = true;
    const serverResponse = await this.leagueService.getPaginatedLeagueFixturesGames(LEAGUE_ID, 2, 1);

    this.fixtures = serverResponse;
    this.currentFixture = this.fixtures[0];
    this.isLoading = false;
  }

  onGameClick(selectedGame: GameFixtureData): void {
    if (this.currentEditedGameId === selectedGame.id) {
      return;
    }
    this.selectedGame = selectedGame;
    const modal = new Modal(this.modalRef.nativeElement);
    modal.show();
  }

  onPageChange(event: any) {
    this.currentFixture = this.fixtures![event.pageIndex];
  }

  closeModal() {
    const modal = new Modal(this.modalRef.nativeElement);
    modal.hide();
  }

  onEditGameResultClick(game: GameFixtureData) {
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

  async onSaveClick(game: GameFixtureData) {
    const serverResponse = await this.gameService.updateGameResult(game.id, this.homeTeamGoals, this.awayTeamGoals);

    if (serverResponse) {
      this.notificationService.success(`Result: ${game.homeTeam.name} ${this.homeTeamGoals} : ${this.awayTeamGoals} ${game.awayTeam.name} updated successfuly`);
      game.status = GameStatus.PLAYED;
      game.result = {homeTeamGoals: this.homeTeamGoals,  awayTeamGoals:this.awayTeamGoals};
//      this.loadFixtures();
    }


    this.currentEditedGameId = null;
  }

  onEditClick() {
    this.editGame = true;
  }

  onCancelClick() {
    this.editGame = false;
  }
}