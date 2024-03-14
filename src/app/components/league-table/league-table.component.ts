import { Component } from '@angular/core';
import { TEAMS_DATA, LEAGUE_TABLE_DISPLAY_COLUMN } from './league-table.mock';
import { Column } from '../../shared/models/column.model';
import { Team } from '../../shared/models/team.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss'
})
export class LeagueTableComponent {
  displayedColumns: Column[] = LEAGUE_TABLE_DISPLAY_COLUMN;
  dataSource = TEAMS_DATA;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onTeamClick($teamDetails: Team) {
    this.router.navigate(['/team-details', { id: $teamDetails.id }])
  }
}
