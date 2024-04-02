import { Component, Input } from '@angular/core';
import { Fixture } from '../../shared/models/game.model';
import { PlayerService } from '../../services/player.service';
import { IPlayer, PlayerDTO } from '../../shared/models/player.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent {
  @Input() selectedFixture: Fixture | undefined = undefined;
  homeTeamPlayers: PlayerDTO[] = [];
  awayTeamPlayers: PlayerDTO[] = [];

  constructor(private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit() {
    this.loadPlayers();
  }

  async loadPlayers() {
    this.homeTeamPlayers = await this.teamService.getPlayersByTeam(this.selectedFixture!.homeTeamDetails.teamID);
    this.awayTeamPlayers = await this.teamService.getPlayersByTeam(this.selectedFixture!.awayTeamDetails.teamID);


  }
}