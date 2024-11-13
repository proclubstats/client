import { Component, Input } from '@angular/core';
import { TeamService } from '../../../../services/team.service';
import { AdvancedPlayersStats, AdvancedTeamStats } from '@pro-clubs-manager/shared-dtos';
import { Router } from '@angular/router';

@Component({
  selector: 'team-details-stats',
  templateUrl: './team-details-stats.component.html',
  styleUrl: './team-details-stats.component.scss'
})
export class TeamDetailsStatsComponent {

  teamStats: AdvancedTeamStats | null = null;
  playersStats: AdvancedPlayersStats | null = null;

  @Input() teamId: string = '';

  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    this.loadTeamStats();
  }

  async loadTeamStats() {
    this.teamStats = await this.teamService.getAdvancedTeamStats(this.teamId);

    this.playersStats = await this.teamService.getTeamPlayerStats(this.teamId, 10);
  };

  onPlayerClick(playerId: string) {
    this.router.navigate(['/player-details', { id: playerId }]);
  }
}