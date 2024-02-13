import { Component } from '@angular/core';
import { LEAGUE_TABLE_DISPLAY_COLUMN } from './top-assists.definitions';
import { ELEMENT_DATA } from '../top-scorers/top-scorers.definitions';
import { Column } from '../../shared/models/column.model';

@Component({
  selector: 'app-top-assists',
  templateUrl: './top-assists.component.html',
  styleUrl: './top-assists.component.scss'
})
export class TopAssistsComponent {
  displayedColumns: Column[] = LEAGUE_TABLE_DISPLAY_COLUMN;
  dataSource = ELEMENT_DATA;
}
