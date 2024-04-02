import { Component, Input } from '@angular/core';
import {  TeamDTO } from '../../../../shared/models/team.model';

@Component({
  selector: 'team-details-overall',
  templateUrl: './team-details-overall.component.html',
  styleUrl: './team-details-overall.component.scss'
})
export class TeamDetailsOverallComponent {
  @Input() chosenTeam: TeamDTO | null = null;

}
