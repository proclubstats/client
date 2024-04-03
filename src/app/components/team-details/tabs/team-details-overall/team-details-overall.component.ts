import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  TeamDTO } from '../../../../shared/models/team.model';

@Component({
  selector: 'team-details-overall',
  templateUrl: './team-details-overall.component.html',
  styleUrl: './team-details-overall.component.scss'
})
export class TeamDetailsOverallComponent {
  @Input() chosenTeam: TeamDTO | null = null;

  @Output() onTeamUpdateEvent: EventEmitter<void> = new EventEmitter();

  onTeamUpdate() {
    this.onTeamUpdateEvent.emit();
  }
}
