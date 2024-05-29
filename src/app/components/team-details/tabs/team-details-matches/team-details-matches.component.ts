import { Component, Input } from '@angular/core';

@Component({
  selector: 'team-details-matches',
  templateUrl: './team-details-matches.component.html',
  styleUrl: './team-details-matches.component.scss'
})
export class TeamDetailsMatchesComponent {

  @Input() teamId : string | undefined = undefined;
}
