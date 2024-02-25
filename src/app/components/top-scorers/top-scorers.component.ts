import { Component } from '@angular/core';
import { ELEMENT_DATA, LEAGUE_TABLE_DISPLAY_COLUMN } from './top-scorers.definitions';
import { Column } from '../../shared/models/column.model';
import { Player } from '../../shared/models/player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrl: './top-scorers.component.scss'
})
export class TopScorersComponent {
  displayedColumns: Column[] = LEAGUE_TABLE_DISPLAY_COLUMN;
  dataSource = ELEMENT_DATA;

  constructor(private router: Router){}

  ngOnInit() {
    this.dataSource.map(player=> player.gpg = (player.goalsAmount / player.gamesAmount).toFixed(2));
  }

  onPlayerClick($playerDetails : Player) : void {
    this.router.navigate(['/player-details', { id: JSON.stringify($playerDetails.id) }])
  }
}