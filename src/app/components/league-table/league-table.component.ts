import { Component } from '@angular/core';
import { LEAGUE_TABLE_DISPLAY_COLUMN } from './league-table.mock';
import { Column } from '../../shared/models/column.model';
import { Router } from '@angular/router';
import { LeagueService } from '../../services/league.service';
import { LeagueTableRow } from '../../shared/models/leagueTableTeam';
import { LEAGUE_ID } from '../../constants/constants';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss'
})
export class LeagueTableComponent {
  displayedColumns: Column[] = LEAGUE_TABLE_DISPLAY_COLUMN;
  leagueTable: LeagueTableRow[] = [];

  constructor(private router: Router, private leagueService: LeagueService) { }

  ngOnInit() {
    this.loadLeagueTableData();
  }

  async loadLeagueTableData() {
    const leagueTableResponse = await this.leagueService.getLeagueTable(LEAGUE_ID);

    this.leagueTable = leagueTableResponse;

  }

  onTeamClick(teamDetails: LeagueTableRow) {
    this.router.navigate(['/team-details', { id: teamDetails.teamId }])
  }
}
