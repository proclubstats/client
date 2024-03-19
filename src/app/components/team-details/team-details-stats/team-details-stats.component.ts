import { Component, Input } from '@angular/core';
import { Team } from '../../../shared/models/team.model';


@Component({
  selector: 'team-details-stats',
  templateUrl: './team-details-stats.component.html',
  styleUrl: './team-details-stats.component.scss'
})
export class TeamDetailsStatsComponent {
  @Input() chosenTeam: Team = new Team();

}
