import { Component, Input } from '@angular/core';
import { LEAGUE_TABLE_DISPLAY_COLUMN, SHORTENED_LEAGUE_TABLE_DISPLAY_COLUMN } from './league-table.mock';
import { Column } from '../../shared/models/column.model';
import { Router } from '@angular/router';
import { LeagueService } from '../../services/league.service';
import { LeagueTableRow } from '../../shared/models/leagueTableTeam';
import { LEAGUE_ID } from '../../constants/constants';

@Component({
  selector: 'league-table',
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss'
})
export class LeagueTableComponent {
  displayedColumns: Column[] = [];
  leagueTable: LeagueTableRow[] = [];
  isLoading: boolean = false;
  @Input() hideTitle: boolean = false;

  constructor(private router: Router, private leagueService: LeagueService) { }

  ngOnInit() {
    this.loadLeagueTableData();
  }

  async loadLeagueTableData() {
    this.isLoading = true;
    this.hideTitle ? (this.displayedColumns = SHORTENED_LEAGUE_TABLE_DISPLAY_COLUMN) : (this.displayedColumns = LEAGUE_TABLE_DISPLAY_COLUMN);

    const leagueTableResponse = await this.leagueService.getLeagueTable(LEAGUE_ID);

    leagueTableResponse.map(team => {
      team.tableIcon = { name: team.teamName, imgUrl: team.imgUrl!, isTeam:true };
    });
    this.leagueTable = leagueTableResponse;
    this.isLoading = false;

  }

  onTeamClick(teamDetails: LeagueTableRow) {
    this.router.navigate(['/team-details', { id: teamDetails.teamId }])
  }
}
