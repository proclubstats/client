import { Component, Input } from '@angular/core';
import { TeamDTO } from '@pro-clubs-manager/shared-dtos';

@Component({
  selector: 'team-details-overall-stats',
  templateUrl: './team-details-overall-stats.component.html',
  styleUrl: './team-details-overall-stats.component.scss'
})
export class TeamDetailsOverallStatsComponent {
  @Input() chosenTeam: TeamDTO | null = null;

}