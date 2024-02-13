import { Component, Input } from '@angular/core';
import { Game } from '../../shared/models/game.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent {
  @Input() selectedGame: Game | undefined = undefined;

  constructor() { }
}