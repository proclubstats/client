import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../shared/models/player.model';
import { PLAYERS_DATA } from '../top-scorers/top-scorers.definitions';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss'
})
export class PlayerDetailsComponent {
  playerID: string = '';
  chosenPlayer?: Player;
  constructor(private route: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit() {
    this.loadPlayerData();
  }

  private loadPlayerData(): void {
    this.playerID = this.route.snapshot.paramMap.get('id') || this.playerID;

    this.chosenPlayer = this.playerService.getPlayerById(this.playerID);
  }
}