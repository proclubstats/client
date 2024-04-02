import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../../../../services/player.service';
import { TeamDTO } from '../../../../../shared/models/team.model';
import { ListOption } from '../../../../../shared/models/list-option.model';
import { TeamService } from '../../../../../services/team.service';

@Component({
  selector: 'team-details-overall-data',
  templateUrl: './team-details-overall-data.component.html',
  styleUrl: './team-details-overall-data.component.scss'
})
export class TeamDetailsOverallDataComponent {
  @Input() chosenTeam: TeamDTO | null = null;
  playersOptions: ListOption[] | null = null;
  editCaptainMode: boolean = false;
  selectedCaptainId: string | null = null;

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.loadPlayersOptions();
  }

  loadPlayersOptions() {
    this.playersOptions = this.chosenTeam!.players.map(player => { return { value: player.id, displayText: player.name } as ListOption });
    this.selectedCaptainId = this.chosenTeam!.captain!.id;
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
    this.selectedCaptainId = $selectedCaptain.value;
  }

  async saveNewCaptain() {
    const response = await this.teamService.setTeamCaptain(this.chosenTeam!.id!, this.selectedCaptainId!);

    this.editCaptainMode = false;
  }
}