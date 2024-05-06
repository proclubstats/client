import { Component, Input } from '@angular/core';
import { Game, GameDTO, GameFixtureData, GameStatus } from '../../shared/models/game.model';
import { PlayerDTO } from '../../shared/models/player.model';
import { TeamService } from '../../services/team.service';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent {
  GameStatus = GameStatus;
  homeTeamPlayers: PlayerDTO[] = [];
  awayTeamPlayers: PlayerDTO[] = [];
  selectedGame: GameDTO | undefined = undefined;

  @Input() set selectedGameId(gameId: string) {
    this._selectedGameId = gameId;
    this.loadGameDetails()
}
  
  _selectedGameId: string | undefined = undefined;

  constructor(private teamService: TeamService, private router: Router, private gameService: GameService) { }

  async loadGameDetails() {
    this.selectedGame = await this.gameService.getGameById(this._selectedGameId!);

    this.loadPlayers();
  }

  async loadPlayers() {
    this.homeTeamPlayers = await this.teamService.getPlayersByTeam(this.selectedGame!.homeTeam.id);
    this.awayTeamPlayers = await this.teamService.getPlayersByTeam(this.selectedGame!.awayTeam.id);
  }

  navigateToTeamDetails(teamId: string): void {
    this.router.navigate(['/team-details', { id: teamId }])
  }

  navigateToPlayerDetails(playerId: string): void {
    this.router.navigate(['/player-details', { id: playerId }])
  }
}