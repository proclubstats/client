import { Component, Input } from '@angular/core';
import { Team } from '../../../shared/models/team.model';
import { PLAYERS_DATA } from '../../top-scorers/top-scorers.definitions';
import { Router } from '@angular/router';

@Component({
  selector: 'team-details-overall',
  templateUrl: './team-details-overall.component.html',
  styleUrl: './team-details-overall.component.scss'
})
export class TeamDetailsOverallComponent {
  @Input() chosenTeam: Team = new Team();

  constructor(private router: Router) { }

  ngOnInit() { }

  convertPlayerIdToName(id: string): string {
    return PLAYERS_DATA.find(player => player.id === id)?.name!;
  }

  navigateToPlayerDetails(playerId: string) :void {
    this.router.navigate(['/player-details', { id: playerId }]);
  }
}