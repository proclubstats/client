import { Component, Input } from '@angular/core';

@Component({
  selector: 'team-details-history',
  templateUrl: './team-details-history.component.html',
  styleUrl: './team-details-history.component.scss'
})
export class TeamDetailsHistoryComponent {

  @Input() teamId: string = '';
}