import { Component, Input } from '@angular/core';
import { Team } from '../../../shared/models/team.model';
import { Router } from '@angular/router';
import { Player } from '../../../shared/models/player.model';
import { TeamService } from '../../../services/team.service';


@Component({
  selector: 'team-details-squad',
  templateUrl: './team-details-squad.component.html',
  styleUrl: './team-details-squad.component.scss'
})
export class TeamDetailsSquadComponent {
  @Input() chosenTeam: Team = new Team();
  allPlayers: Player[] = [];
  goalkeepers: Player[] = [];
  defenders: Player[] = [];
  midfielders: Player[] = [];
  attackers: Player[] = [];

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.loadPlayersData();
  }

  loadPlayersData(): void {
    this.teamService.getPlayersByTeam(this.chosenTeam.id).then(serverResponse => {
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
    this.router.navigate(['/add-player', { id: this.chosenTeam.id }]);
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

  onPlayerClick(playerId: string) : void {
    this.router.navigate(['/player-details', { id: playerId }]);
  }
}
