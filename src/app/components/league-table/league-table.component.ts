import { Component } from '@angular/core';
import { ELEMENT_DATA, LEAGUE_TABLE_DISPLAY_COLUMN } from './league-table.mock';
import { Column } from '../../shared/models/column.model';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss'
})
export class LeagueTableComponent {
  displayedColumns: Column[] = LEAGUE_TABLE_DISPLAY_COLUMN;
  dataSource = ELEMENT_DATA;
}
