import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../../../../../services/team.service';
import { PlayerDTOShort } from '../../../../../shared/models/player.model';
import { PlayerService } from '../../../../../services/player.service';
import { TeamDTO } from '@pro-clubs-manager/shared-dtos';

@Component({
  selector: 'team-details-squad',
  templateUrl: './team-details-squad.component.html',
  styleUrl: './team-details-squad.component.scss'
})
export class TeamDetailsSquadComponent {
  @Input() chosenTeam: TeamDTO | null = null;
  allPlayers: PlayerDTOShort[] = [];
  goalkeepers: PlayerDTOShort[] = [];
  defenders: PlayerDTOShort[] = [];
  midfielders: PlayerDTOShort[] = [];
  attackers: PlayerDTOShort[] = [];

  constructor(private router: Router, private teamService: TeamService, private playerService: PlayerService) { }

  ngOnInit() {
    this.loadPlayersData();
  }

  async loadPlayersData() {
    this.allPlayers = this.chosenTeam!.players!;

    this.getTeamAttackers();
    this.getTeamMidfielders();
    this.getTeamDefenders();
    this.getTeamGoalKeepers();

  }

  onAddPlayerClick(): void {
    this.router.navigate(['/assign-player-to-team', { id: this.chosenTeam!.id, name: this.chosenTeam!.name }]);
  }

  getTeamAttackers() {
    this.attackers = this.allPlayers!.filter(player => {
      return player.position === "ST" || player.position === "RW" || player.position === "LW" ||
        player.position === "RF" || player.position === "CF" || player.position === "LF"
    });
  }

  getTeamGoalKeepers() {
    this.goalkeepers = this.allPlayers!.filter(player => { return player.position === "GK" });
  }

  getTeamDefenders() {
    this.defenders = this.allPlayers!.filter(player => {
      return player.position === "RB" || player.position === "RWB" || player.position === "LWB" ||
        player.position === "LB" || player.position === "CB"
    });
  }

  getTeamMidfielders() {
    this.midfielders = this.allPlayers!.filter(player => {
      return player.position === "CDM" || player.position === "CM" || player.position === "RM" ||
        player.position === "LM" || player.position === "CAM"
    });
  }

  onPlayerClick(playerId: string): void {
    this.router.navigate(['/player-details', { id: playerId }]);
  }
}
