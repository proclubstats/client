import { Component, Input } from '@angular/core';
import { Fixture } from '../../shared/models/game.model';
import { PLAYERS_DATA } from '../top-scorers/top-scorers.definitions';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent {
  @Input() selectedFixture: Fixture | undefined = undefined;

  constructor() { }

  ngOnInit() {
  }

  convertPlayerIdToName(playerId: string): string {
    return PLAYERS_DATA.find(player => player.id === playerId)?.name!;
  }


}