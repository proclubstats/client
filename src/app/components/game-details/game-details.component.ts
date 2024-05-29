import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { GameDTO, GameStatus, PlayerPerformanceDTO } from '../../shared/models/game.model';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent {
  GameStatus = GameStatus;
  selectedGame: GameDTO | undefined = undefined;
  homeTeamScorers: PlayerPerformanceDTO[] = [];
  homeTeamAssists: PlayerPerformanceDTO[] = [];
  awayTeamScorers: PlayerPerformanceDTO[] = [];
  awayTeamAssists: PlayerPerformanceDTO[] = [];

  @Input() set selectedGameId(gameId: string) {
    this._selectedGameId = gameId;
    this.loadGameDetails()
  }

  ngOnDestroy() {
    this.homeTeamAssists = [];
    this.homeTeamScorers = [];
    this.awayTeamAssists = [];
    this.awayTeamScorers = [];
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
      this.homeTeamScorers = homeTeamPerformance.filter(player => player.goals! > 0);
      this.homeTeamAssists = homeTeamPerformance.filter(player => player.assists! > 0);
    }

    if (awayTeamPerformance) {
      this.awayTeamScorers = awayTeamPerformance.filter(player => player.goals! > 0);
      this.awayTeamAssists = awayTeamPerformance.filter(player => player.assists! > 0);
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