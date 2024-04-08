import { Component, Input } from '@angular/core';
import { SHORTENED_TOP_SCORERS_COLUMNS, TOP_SCORERS_COLUMNS } from './top-scorers.definitions';
import { Column } from '../../shared/models/column.model';
import { Router } from '@angular/router';
import { LeagueService } from '../../services/league.service';
import { LEAGUE_ID } from '../../constants/constants';
import { TopScorer } from '../../shared/models/topscorer.model';

@Component({
  selector: 'top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrl: './top-scorers.component.scss'
})
export class TopScorersComponent {
  displayedColumns: Column[] = [];
  topScorers: TopScorer[] = [];
  isLoading: boolean = false;

  @Input() hideTitle: boolean = false;

  constructor(private router: Router, private leagueService: LeagueService) { }

  ngOnInit() {
    this.loadTopScorersData();
  }

  private async loadTopScorersData( ) {
    this.isLoading = true;

    this.hideTitle ? (this.displayedColumns = SHORTENED_TOP_SCORERS_COLUMNS) : (this.displayedColumns = TOP_SCORERS_COLUMNS);
    const topScorersResponse = await this.leagueService.getTopScorers(LEAGUE_ID);

    topScorersResponse.map(topScorer=> {
        topScorer.tableIcon = { name: topScorer.playerName, imgUrl: topScorer.playerImgUrl!, isTeam: false};
    });
    this.topScorers = topScorersResponse;
    this.isLoading = false;

  }

  onPlayerClick($playerDetails: TopScorer): void {
    this.router.navigate(['/player-details', { id: $playerDetails.playerId }])
  }
}