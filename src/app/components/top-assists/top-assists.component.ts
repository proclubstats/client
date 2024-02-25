import { Component } from '@angular/core';
import { LEAGUE_TABLE_DISPLAY_COLUMN } from './top-assists.definitions';
import { ELEMENT_DATA } from '../top-scorers/top-scorers.definitions';
import { Column } from '../../shared/models/column.model';
import { Player } from '../../shared/models/player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-assists',
  templateUrl: './top-assists.component.html',
  styleUrl: './top-assists.component.scss'
})
export class TopAssistsComponent {
  displayedColumns: Column[] = LEAGUE_TABLE_DISPLAY_COLUMN;
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) { }

  ngOnInit() {
    this.dataSource.map(player => player.apg = (player.assistsAmount / player.gamesAmount).toFixed(2));
  }

  onPlayerClick($playerDetails: Player): void {
    this.router.navigate(['/player-details', { id: JSON.stringify($playerDetails.id) }])
  }
}