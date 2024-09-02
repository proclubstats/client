import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { GameDTO, GameStatus, PlayerPerformanceDTO } from '../../shared/models/game.model';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { MatDialogRef } from '@angular/material/dialog';
import { PlayerStatsForDisplay } from '../../shared/models/player-stat.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent {
  GameStatus = GameStatus;
  selectedGame: GameDTO | undefined = undefined;
  homeTeamScorersAndAssists: PlayerPerformanceDTO[] = [];
  awayTeamScorersAndAssists: PlayerPerformanceDTO[] = [];

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