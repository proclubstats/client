import { Component, Input } from '@angular/core';
import { TeamDTO } from '../../../../../shared/models/team.model';

@Component({
  selector: 'team-details-overall-stats',
  templateUrl: './team-details-overall-stats.component.html',
  styleUrl: './team-details-overall-stats.component.scss'
})
export class TeamDetailsOverallStatsComponent {
  @Input() chosenTeam: TeamDTO | null = null;

}