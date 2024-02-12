import { Component } from '@angular/core';
import { Game } from '../../shared/models/game.model';
import { gamesArray } from './fixtures.mock';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrl: './fixtures.component.scss'
})
export class FixturesComponent {
  fixturesData: Game[] = gamesArray;
  dateFormat = 'dd.MM.YYYY';
}