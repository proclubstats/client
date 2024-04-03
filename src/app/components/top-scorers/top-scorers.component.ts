import { Component } from '@angular/core';
import { TOP_SCORERS_COLUMNS } from './top-scorers.definitions';
import { Column } from '../../shared/models/column.model';
import { Router } from '@angular/router';
import { LeagueService } from '../../services/league.service';
import { LEAGUE_ID } from '../../constants/constants';
import { TopScorer } from '../../shared/models/topscorer.model';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrl: './top-scorers.component.scss'
})
export class TopScorersComponent {
  displayedColumns: Column[] = TOP_SCORERS_COLUMNS;
  topScorers: TopScorer[] = [];

  constructor(private router: Router, private leagueService: LeagueService) { }

  ngOnInit() {
    this.loadTopScorersData();
  }

  private async loadTopScorersData( ) {
    const topScorersResponse = await this.leagueService.getTopScorers(LEAGUE_ID);
    this.topScorers = topScorersResponse;
  }

  onPlayerClick($playerDetails: TopScorer): void {
    this.router.navigate(['/player-details', { id: $playerDetails.playerId }])
  }
}