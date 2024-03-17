import { Component } from '@angular/core';
import { LEAGUE_TABLE_DISPLAY_COLUMN } from './top-scorers.definitions';
import { Column } from '../../shared/models/column.model';
import { Player } from '../../shared/models/player.model';
import { Router } from '@angular/router';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrl: './top-scorers.component.scss'
})
export class TopScorersComponent {
  displayedColumns: Column[] = LEAGUE_TABLE_DISPLAY_COLUMN;
  dataSource = [];

  constructor(private router: Router, private leagueService: LeagueService) { }

  ngOnInit() {
    this.loadTopScorersData();
  }

  private loadTopScorersData(): void {
    this.leagueService.getTopScorers().then(serverResponse => {
      this.dataSource = serverResponse;
    })
  }

  onPlayerClick($playerDetails: Player): void {
    this.router.navigate(['/player-details', { id: $playerDetails.id }])
  }
}