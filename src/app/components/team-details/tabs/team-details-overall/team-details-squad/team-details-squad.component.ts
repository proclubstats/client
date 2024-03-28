import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../../../../../services/team.service';
import { IPlayer } from '../../../../../shared/models/player.model';
import { ITeam } from '../../../../../shared/models/team.model';

@Component({
  selector: 'team-details-squad',
  templateUrl: './team-details-squad.component.html',
  styleUrl: './team-details-squad.component.scss'
})
export class TeamDetailsSquadComponent {
  @Input() chosenTeam: ITeam | null = null;
  allPlayers: IPlayer[] = [];
  goalkeepers: IPlayer[] = [];
  defenders: IPlayer[] = [];
  midfielders: IPlayer[] = [];
  attackers: IPlayer[] = [];

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.loadPlayersData();
  }

  loadPlayersData(): void {
    // TO REMOVE
    this.teamService.getPlayersByTeam(this.chosenTeam!.id).then(serverResponse => {
      if (serverResponse) {
        this.allPlayers = serverResponse;

        this.getTeamAttackers();
        this.getTeamMidfielders();
        this.getTeamDefenders();
        this.getTeamGoalKeepers();
      }
    })
  }

  onAddPlayerClick(): void {
    this.router.navigate(['/add-player', { id: this.chosenTeam!.id }]);
  }

  getTeamAttackers() {
    this.attackers = this.allPlayers.filter(player => {
      return player.position === "ST" || player.position === "RW" || player.position === "LW" ||
        player.position === "RF" || player.position === "CF" || player.position === "LF"
    });
  }

  getTeamGoalKeepers() {
    this.goalkeepers = this.allPlayers.filter(player => { return player.position === "GK" });
  }

  getTeamDefenders() {
    this.defenders = this.allPlayers.filter(player => {
      return player.position === "RB" || player.position === "RWB" || player.position === "LWB" ||
        player.position === "LB" || player.position === "CB"
    });
  }

  getTeamMidfielders() {
    this.midfielders = this.allPlayers.filter(player => {
      return player.position === "CDM" || player.position === "CM" || player.position === "RM" ||
        player.position === "LM" || player.position === "CAM"
    });
  }

  onPlayerClick(playerId: string): void {
    this.router.navigate(['/player-details', { id: playerId }]);
  }
}
