import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { MatDialogRef } from '@angular/material/dialog';
import { GAME_STATUS, GameDTO, PlayerPerformanceDTO } from '@pro-clubs-manager/shared-dtos';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent {
  GameStatus = GAME_STATUS;
  selectedGame: GameDTO | undefined = undefined;
  homeTeamScorersAndAssists: PlayerPerformanceDTO[] = [];
  awayTeamScorersAndAssists: PlayerPerformanceDTO[] = [];
  playerOfTheMatch: PlayerPerformanceDTO | undefined = undefined;
  playerOfTheMatchTeamName: string = '';

  @Input() set selectedGameId(gameId: string) {
    this._selectedGameId = gameId;
    this.loadGameDetails()
  }

  ngOnDestroy() {
    this.homeTeamScorersAndAssists = [];
    this.awayTeamScorersAndAssists = [];
  }

  _selectedGameId: string | undefined = undefined;

  constructor(private router: Router, private gameService: GameService, private cdRef: ChangeDetectorRef, private dialogRef: MatDialogRef<GameDetailsComponent>) { }

  async loadGameDetails() {
    this.selectedGame = await this.gameService.getGameById(this._selectedGameId!);
    this.cdRef.detectChanges();
    this.loadScorersAndAssists();
    this.loadPlayerOfTheMatch();
  }

  loadScorersAndAssists() {
    if (!this.selectedGame)
      return;

    const homeTeamPerformance = this.selectedGame.homeTeam.playersPerformance;
    const awayTeamPerformance = this.selectedGame.awayTeam.playersPerformance;

    if (homeTeamPerformance) {
      this.homeTeamScorersAndAssists = homeTeamPerformance.filter(player => player.goals! > 0 || player.assists! > 0);
    }

    if (awayTeamPerformance) {
      this.awayTeamScorersAndAssists = awayTeamPerformance.filter(player => player.goals! > 0 || player.assists! > 0);
    }
  };

  loadPlayerOfTheMatch() {
    this.playerOfTheMatch = this.selectedGame!.homeTeam.playersPerformance?.find(performance => performance.playerOfTheMatch == true);
    this.playerOfTheMatchTeamName = this.selectedGame!.homeTeam.name;

    if (!this.playerOfTheMatch) {
      this.playerOfTheMatch = this.selectedGame!.awayTeam.playersPerformance?.find(performance => performance.playerOfTheMatch == true);
      this.playerOfTheMatchTeamName = this.selectedGame!.awayTeam.name;
    }
  }

  navigateToTeamDetails(teamId: string): void {
    this.dialogRef.close();
    this.router.navigate(['/team-details', { id: teamId }])
  }

  navigateToPlayerDetails(playerId: string): void {
    this.dialogRef.close();
    this.router.navigate(['/player-details', { id: playerId }])
  }
}