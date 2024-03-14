import { Component } from '@angular/core';
import { PLAYERS_DATA, LEAGUE_TABLE_DISPLAY_COLUMN } from './top-scorers.definitions';
import { Column } from '../../shared/models/column.model';
import { Player } from '../../shared/models/player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrl: './top-scorers.component.scss'
})
export class TopScorersComponent {
  displayedColumns: Column[] = LEAGUE_TABLE_DISPLAY_COLUMN;
  dataSource = PLAYERS_DATA;

  constructor(private router: Router, private playerService: PlayerService){}

  ngOnInit() {
    this.dataSource.map(player=> player.gpg = (player.goalsAmount / player.gamesAmount).toFixed(2));
    this.playerService.getAllPlayers().then(res=>{
      console.log(res);
    })
  }

  onPlayerClick($playerDetails : Player) : void {
    this.router.navigate(['/player-details', { id: JSON.stringify($playerDetails.id) }])
  }
}