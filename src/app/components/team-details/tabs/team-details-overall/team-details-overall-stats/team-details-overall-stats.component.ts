import { Component, Input } from '@angular/core';
import { ITeam } from '../../../../../shared/models/team.model';

@Component({
  selector: 'team-details-overall-stats',
  templateUrl: './team-details-overall-stats.component.html',
  styleUrl: './team-details-overall-stats.component.scss'
})
export class TeamDetailsOverallStatsComponent {
  @Input() chosenTeam: ITeam | null = null;

}