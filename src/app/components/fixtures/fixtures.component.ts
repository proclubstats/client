import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FixtureDTO, GameFixtureData, GameStatus } from '../../shared/models/game.model';
import { Modal } from 'bootstrap';
import { LeagueService } from '../../services/league.service';
import { LEAGUE_ID } from '../../constants/constants';
import { GameService } from '../../services/game.service';
import { NotificationService } from '../../services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { GameDetailsComponent } from '../game-details/game-details.component';
import { ModifyGameComponent } from '../modify-game/modify-game.component';
import { PopupDialogComponent } from '../../shared/components/popup-dialog/popup-dialog.component';
import { ListOption } from '../../shared/models/list-option.model';

@Component({
  selector: 'fixtures',
  templateUrl: './fixtures.component.html',
  styleUrl: './fixtures.component.scss'
})
export class FixturesComponent {
  currentFixtureNumber: number = 17;
  GameStatus = GameStatus;
  fixtures: FixtureDTO[] | null = null;
  currentFixture: FixtureDTO | null = null;
  selectedGame: GameFixtureData | null = null;
  fixturesOptions: ListOption[] = [];
  dateFormat = 'dd.MM.YYYY';
  isLoading: boolean = false;
  editGame: boolean = false;
  currentEditedGameId: string | null = null;
  homeTeamGoals: number = 0;
  awayTeamGoals: number = 0;
  totalFixtures: number = 0;

  @Input() hideTitle: boolean = false;

  constructor(private leagueService: LeagueService, private gameService: GameService,
    private matDialog: MatDialog,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.loadFixtures();
  }

  async loadFixtures() {
    this.isLoading = true;
    const serverResponse = await this.leagueService.getPaginatedLeagueFixturesGames(LEAGUE_ID, 1,26);
    this.totalFixtures = serverResponse.totalFixtures;
    this.loadFixturesOptions();

    this.fixtures = serverResponse.fixtures;
    this.currentFixture = this.fixtures[0];
    this.isLoading = false;
  };

  private loadFixturesOptions() {
    this.fixturesOptions = [];
    this.fixturesOptions = Array.from({ length: this.totalFixtures }, (_, i) => ({ value: (i + 1).toString(), displayText: (i + 1).toString() }));
  };

  onSelectionChange(selectedOption: ListOption) {
    if (!selectedOption) {
      return;
    }
    this.currentFixture = this.fixtures![parseInt(selectedOption.value) - 1];

    this.currentFixtureNumber = parseInt(selectedOption.value);
  }

  onGameClick(selectedGame: GameFixtureData): void {
    if (this.currentEditedGameId === selectedGame.id) {
      return;
    }
    this.selectedGame = selectedGame;

    this.matDialog.open(PopupDialogComponent, { data: { components: [GameDetailsComponent, ModifyGameComponent], componentSwitchMode: true, componentParams: { selectedGameId: this.selectedGame.id } }, autoFocus: true, width: '1750px', height: '820px' });
  }

  onPageChange(event: any) {
    this.currentFixture = this.fixtures![event.pageIndex];
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
      game.result = { homeTeamGoals: this.homeTeamGoals, awayTeamGoals: this.awayTeamGoals };
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