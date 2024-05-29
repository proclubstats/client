import { Component, Input } from '@angular/core';
import { Column } from '../../shared/models/column.model';
import { Router } from '@angular/router';
import { LeagueService } from '../../services/league.service';
import { IPlayer } from '../../shared/models/player.model';
import { LEAGUE_ID } from '../../constants/constants';
import { TopAssister } from '../../shared/models/topassister.model';
import { SHORTENED_TOP_ASSISTS_COLUMNS, TOP_ASSISTS_COLUMNS } from './top-assists.definitions';

@Component({
  selector: 'top-assists',
  templateUrl: './top-assists.component.html',
  styleUrl: './top-assists.component.scss'
})
export class TopAssistsComponent {
  displayedColumns: Column[] = [];
  topAssistsData: TopAssister[] = [];
  isLoading: boolean = false;

  @Input() hideTitle: boolean = false;

  constructor(private router: Router, private leagueService: LeagueService) { }

  ngOnInit() {
    this.loadTopAssistsData();
  }

  private async loadTopAssistsData() {
    this.isLoading = true;

    this.hideTitle ? (this.displayedColumns = SHORTENED_TOP_ASSISTS_COLUMNS) : (this.displayedColumns = TOP_ASSISTS_COLUMNS);
    const topAssistsResponse = await this.leagueService.getTopAssists(LEAGUE_ID);

    topAssistsResponse.map(topAssist => {
      topAssist.tableIcon = { name: topAssist.playerName, imgUrl: topAssist.playerImgUrl!, isTeam: false };
      topAssist.assistsPerGame = parseFloat(topAssist.assistsPerGame.toFixed(2));
    });

    this.topAssistsData = topAssistsResponse;
    this.isLoading = false;
  }

  onPlayerClick($playerDetails: TopAssister): void {
    this.router.navigate(['/player-details', { id: $playerDetails.playerId }])
  }
}