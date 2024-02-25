import { Component, ElementRef, ViewChild } from '@angular/core';
import { Game } from '../../shared/models/game.model';
import { gamesArray } from './fixtures.mock';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrl: './fixtures.component.scss'
})
export class FixturesComponent {
  fixturesData: Game[] = gamesArray;
  selectedGame: Game | undefined = undefined;
  dateFormat = 'dd.MM.YYYY';
  @ViewChild('gameDetailsModal') modalRef : any;

  constructor() { }

  onGameClick(selectedGame: Game): void {
    this.selectedGame = selectedGame;
    const modal = new Modal(this.modalRef.nativeElement);
    modal.show();
  }
}