import { Component, Input, ViewChild } from '@angular/core';
import { Fixture } from '../../shared/models/game.model';
import { gamesArray } from './fixtures.mock';
import { Modal } from 'bootstrap';

@Component({
  selector: 'fixtures',
  templateUrl: './fixtures.component.html',
  styleUrl: './fixtures.component.scss'
})
export class FixturesComponent {
  fixturesData: Fixture[] = gamesArray;
  selectedFixture: Fixture | undefined = undefined;
  dateFormat = 'dd.MM.YYYY';
  editFixture: boolean = false;

  @Input() hideTitle: boolean = false;

  @ViewChild('gameDetailsModal') modalRef: any;

  constructor() {
  }

  ngOnInit() {}

  onGameClick(selectedFixture: Fixture): void {
    this.selectedFixture = selectedFixture;
    const modal = new Modal(this.modalRef.nativeElement);
    modal.show();
  }

  closeModal() {
    const modal = new Modal(this.modalRef.nativeElement);
    modal.hide();
  }

  onEditClick() {
    this.editFixture = true;
  }

  onCancelClick() {
    this.editFixture = false;
  }
}