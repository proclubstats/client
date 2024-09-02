import { Component, Input } from '@angular/core';
import { PlayerGameForm, PlayerLastGamesForm } from '@pro-clubs-manager/shared-dtos';
import { PlayerService } from '../../services/player.service';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'last-games-form',
  templateUrl: './last-games-form.component.html',
  styleUrl: './last-games-form.component.scss'
})
export class LastGamesFormComponent {

  lastGamesForm: PlayerLastGamesForm | null = null;
  ratingChartOptions: AgChartOptions = {};
  @Input() playerId: string = '';
  @Input() teamId: string = '';

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.loadPlayerLastGamesForm();

  }

  async loadPlayerLastGamesForm() {
    this.lastGamesForm = await this.playerService.getPlayerForm(this.playerId);

    this.loadGraphData();
  }

  loadGraphData() {
    this.ratingChartOptions = {
      data: this.lastGamesForm!.lastGames,
      background: { visible: false },
      theme: 'ag-default-dark',
      height: 240,
      series: [{
        type: "line",
        xKey: "round",
        yKey: "rating",
        yName: "Rating",
        tooltip: {
          renderer: (tooltipParams) => {
            return {
              content: `${this.getTeams(tooltipParams.datum)}  ${this.getScores(tooltipParams.datum)} <br> Position: ${tooltipParams.datum.positionPlayed} <br>
              Rating: ${tooltipParams.datum.rating} <br> Goals: ${tooltipParams.datum.goals} <br> Assists: ${tooltipParams.datum.assists}`,
              title: `Fixture ${tooltipParams.datum.round}`
            };
          },
        }
      }]
    };
  };

  getTeams(playerGameForm: PlayerGameForm): string {
    return `${playerGameForm.homeTeam.name} vs ${playerGameForm.awayTeam.name}`;
  }

  getScores(playerGameForm: PlayerGameForm): string {
    return `${playerGameForm.result.homeTeamGoals}:${playerGameForm.result.awayTeamGoals}`;
  }
}
