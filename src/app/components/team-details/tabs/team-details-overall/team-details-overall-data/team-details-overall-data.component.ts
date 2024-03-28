import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ITeam } from '../../../../../shared/models/team.model';
import { PlayerService } from '../../../../../services/player.service';
import { IPlayer } from '../../../../../shared/models/player.model';

@Component({
  selector: 'team-details-overall-data',
  templateUrl: './team-details-overall-data.component.html',
  styleUrl: './team-details-overall-data.component.scss'
})
export class TeamDetailsOverallDataComponent {
  @Input() chosenTeam: ITeam | null = null;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {

  }

  async convertPlayerIdToName(id: string): Promise<string> {
    var playerName: string = '';
    const response = await this.playerService.getPlayerById(id);

    playerName = response.name;

    return playerName;
  }

  navigateToPlayerDetails(playerId: string): void {
    this.router.navigate(['/player-details', { id: playerId }]);
  }
}