import { Component } from '@angular/core';
import { Team } from '../../shared/models/team.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PLAYERS_DATA } from '../top-scorers/top-scorers.definitions';
import { TEAMS_DATA } from '../league-table/league-table.mock';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.scss'
})
export class TeamDetailsComponent {

  teamID: string = '';
  chosenTeam?: Team;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.teamID = this.route.snapshot.paramMap.get('id') || this.teamID;

    this.chosenTeam = TEAMS_DATA.find(team => team.id === this.teamID)!;
    
  }

  onAddPlayerClick(): void {
    this.router.navigate(['/add-player', { id: this.teamID }]);
  }

  convertPlayerIdToName(id : string) : string {
    return PLAYERS_DATA.find(player=>player.id === id)?.name!;
  }

  navigateToPlayerDetails(playerId: string) :void {
    this.router.navigate(['/player-details', { id: playerId }]);
  }
}