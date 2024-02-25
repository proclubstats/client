import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../shared/models/player.model';
import { ELEMENT_DATA } from '../top-scorers/top-scorers.definitions';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss'
})
export class PlayerDetailsComponent {
  playerID: number = 0;
  chosenPlayer?: Player;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(event => {
      if (event['id']) {
        this.playerID = parseInt(event['id']);
      }
    });

    this.chosenPlayer = ELEMENT_DATA.find(player => player.id === this.playerID);
  }
}