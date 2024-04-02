import { Component } from '@angular/core';
import { LEAGUE_TABLE_DISPLAY_COLUMN } from './top-assists.definitions';
import { Column } from '../../shared/models/column.model';
import { Router } from '@angular/router';
import { LeagueService } from '../../services/league.service';
import { IPlayer } from '../../shared/models/player.model';
import { LEAGUE_ID } from '../../constants/constants';

@Component({
  selector: 'app-top-assists',
  templateUrl: './top-assists.component.html',
  styleUrl: './top-assists.component.scss'
})
export class TopAssistsComponent {
  displayedColumns: Column[] = LEAGUE_TABLE_DISPLAY_COLUMN;
  topAssistsData: IPlayer[] = [];

  constructor(private router: Router, private leagueService: LeagueService) { }

  ngOnInit() {
    this.loadTopAssistsData();
  }

  private async loadTopAssistsData() {
    const topAssistsResponse = await this.leagueService.getTopAssists(LEAGUE_ID);

    this.topAssistsData = topAssistsResponse;
  }

  onPlayerClick($playerDetails: any): void {
    this.router.navigate(['/player-details', { id: $playerDetails._id }])
  }
}