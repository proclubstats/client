import { Component } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { ListOption } from '../../shared/models/list-option.model';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../services/team.service';
import { PlayerDTO } from '@pro-clubs-manager/shared-dtos';

@Component({
  selector: 'assign-player-to-team',
  templateUrl: './assign-player-to-team.component.html',
  styleUrl: './assign-player-to-team.component.scss'
})
export class AssignPlayerToTeamComponent {
  freeAgentsOptions: ListOption[] | null = null;
  selectedPlayer: PlayerDTO | null = null;
  allPlayers: PlayerDTO[] | null = null;
  teamID: string = '';
  teamName: string = '';

  constructor(private route: ActivatedRoute, private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit() {
    this.loadSelectedTeam();
    this.loadFreeAgents();
  };

  private loadSelectedTeam(): void {
    this.teamID = this.route.snapshot.paramMap.get('id') || this.teamID;
    this.teamName = this.route.snapshot.paramMap.get('name') || this.teamName;

    if (!this.teamID || !this.teamName) { return; }
  }


  async loadFreeAgents() {
    const serverResponse = await this.playerService.getFreeAgents();

    this.allPlayers = serverResponse;

    this.freeAgentsOptions = [];
    serverResponse.map(player => {
      this.freeAgentsOptions!.push({ value: player.id, displayText: `${player.name}, ${player.age}, ${player.position}` });
    });
  };

  onPlayerSelect(selectedPlayer: ListOption) {
    if (!selectedPlayer) {
      return;
    }

    this.selectedPlayer = this.allPlayers!.find(player => player.id === selectedPlayer.value)!;
  };

  async onAssignClick() {
    await this.teamService.addPlayerToTeam(this.teamID, this.selectedPlayer!.id);

    history.back();
  }

  onArrowBackClick() {
    history.back();
  }
}
