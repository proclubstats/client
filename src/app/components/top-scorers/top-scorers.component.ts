import { Component } from '@angular/core';
import { LEAGUE_TABLE_DISPLAY_COLUMN } from './top-scorers.definitions';
import { Column } from '../../shared/models/column.model';
import { Router } from '@angular/router';
import { LeagueService } from '../../services/league.service';
import { IPlayer } from '../../shared/models/player.model';
import { LEAGUE_ID } from '../../constants/constants';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrl: './top-scorers.component.scss'
})
export class TopScorersComponent {
  displayedColumns: Column[] = LEAGUE_TABLE_DISPLAY_COLUMN;
  topScorers: IPlayer[] = [];

  constructor(private router: Router, private leagueService: LeagueService) { }

  ngOnInit() {
    this.loadTopScorersData();
  }

  private async loadTopScorersData( ) {
    const topScorersResponse = await this.leagueService.getTopScorers(LEAGUE_ID);
    this.topScorers = topScorersResponse;
  }

  onPlayerClick($playerDetails: IPlayer): void {
    this.router.navigate(['/player-details', { id: $playerDetails.id }])
  }
}