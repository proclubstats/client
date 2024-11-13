import { Component, Input } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { IPlayerStats } from '../../shared/models/player.model';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'player-stats-by-position',
  templateUrl: './player-stats-by-position.component.html',
  styleUrl: './player-stats-by-position.component.scss'
})
export class PlayerStatsByPositionComponent {

  playerStats: { [position: string]: IPlayerStats } | undefined = undefined;
  playerStatsChartOptions: AgChartOptions = {};

  @Input() playerId: string = '';

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.loadPlayerStatsByPosition();
  }

  async loadPlayerStatsByPosition() {
    this.playerStats = await this.playerService.getPlayerStatsByPosition(this.playerId);

    this.loadGraphData();
  };

  getPlayerStatsAsArray() {
    if (this.playerStats)
      return Object.entries(this.playerStats!).map(([key, value]) => ({ key, value }));

    return null;
  }

  loadGraphData() {
    this.playerStatsChartOptions = {
      data: Object.entries(this.playerStats!).map(([key, value]) => ({ key, value })),
      background: { visible: false },
      theme: 'ag-default-dark',
      height: 240,
      series: [{
        type: "bar",
        xKey: "key",
        yKey: "value.avgRating",
        yName: "Rating",
        tooltip: {
          renderer: (tooltipParams) => {
            return {
              content: `Rating: ${tooltipParams.datum.value.avgRating.toFixed(2)} <br> Games: ${tooltipParams.datum.value.games}
              <br> Goals: ${tooltipParams.datum.value.goals}
               <br> Assists: ${tooltipParams.datum.value.assists}
               <br> POTM: ${tooltipParams.datum.value.playerOfTheMatch}`,
              title: `Position: ${tooltipParams.datum.key}`
            };
          },
        }
      }]
    };
  };






}