import { Component } from '@angular/core';
import { ELEMENT_DATA, LEAGUE_TABLE_DISPLAY_COLUMN } from './top-scorers.definitions';
import { Column } from '../../shared/models/column.model';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrl: './top-scorers.component.scss'
})
export class TopScorersComponent {
  displayedColumns: Column[] = LEAGUE_TABLE_DISPLAY_COLUMN;
  dataSource = ELEMENT_DATA;
}
