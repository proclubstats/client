import { Component } from '@angular/core';
import { LEAGUE_TABLE_DISPLAY_COLUMN } from './top-assists.definitions';
import { Column } from '../../shared/models/column.model';
import { Player } from '../../shared/models/player.model';
import { Router } from '@angular/router';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-top-assists',
  templateUrl: './top-assists.component.html',
  styleUrl: './top-assists.component.scss'
})
export class TopAssistsComponent {
  displayedColumns: Column[] = LEAGUE_TABLE_DISPLAY_COLUMN;
  dataSource = [];

  constructor(private router: Router, private leagueService: LeagueService) { }

  ngOnInit() {
    this.loadTopAssistsData();
  }

  private loadTopAssistsData(): void {
    this.leagueService.getTopAssists().then(serverResponse => {
      this.dataSource = serverResponse;
    })
  }

  onPlayerClick($playerDetails: Player): void {
    this.router.navigate(['/player-details', { id: $playerDetails.id }])
  }
}