import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TeamDTO } from '../../../../../shared/models/team.model';
import { ListOption } from '../../../../../shared/models/list-option.model';
import { TeamService } from '../../../../../services/team.service';
import { NotificationService } from '../../../../../services/notification.service';

@Component({
  selector: 'team-details-overall-data',
  templateUrl: './team-details-overall-data.component.html',
  styleUrl: './team-details-overall-data.component.scss'
})
export class TeamDetailsOverallDataComponent {
  @Input() chosenTeam: TeamDTO | null = null;
  playersOptions: ListOption[] | null = null;
  editCaptainMode: boolean = false;
  selectedCaptain: ListOption | null = null;

  @Output() onTeamUpdateEvent: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router, private teamService: TeamService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.loadPlayersOptions();
  }

  loadPlayersOptions() {
    this.playersOptions = this.chosenTeam!.players.map(player => { return { value: player.id, displayText: player.name } as ListOption });
    this.selectedCaptain = new ListOption();
    this.selectedCaptain.value = this.chosenTeam!.captain!.id;
    this.selectedCaptain.displayText = this.chosenTeam!.captain!.name;
  }

  // when the user clicks on captain's name or photo
  navigateToPlayerDetails(playerId: string): void {
    this.router.navigate(['/player-details', { id: playerId }]);
  }

  getTeamCaptainName() {
    if (!this.chosenTeam?.captain) {
      return '';
    }
    return this.chosenTeam!.captain!.name;
  }

  changeEditCaptainModeStatus(status: boolean) {
    this.editCaptainMode = status;
  }

  onCaptainSelect($selectedCaptain: ListOption) {
    if (!$selectedCaptain) {
      return;
    }
    this.selectedCaptain = $selectedCaptain;
  }

  async saveNewCaptain() {
    const response = await this.teamService.setTeamCaptain(this.chosenTeam!.id!, this.selectedCaptain!.value);

    this.notificationService.success(`${this.chosenTeam!.name}'s new captain: ${this.selectedCaptain?.displayText} `);
    this.onTeamUpdateEvent.emit();
    this.editCaptainMode = false;
  }
}