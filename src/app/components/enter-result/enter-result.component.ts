import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListOption } from '../../shared/models/list-option.model';
import { Game } from '../../shared/models/game.model';
import { gamesArray } from '../fixtures/fixtures.mock';

export const TEAMS: ListOption[] = [
  {
    value: 0,
    displayText: "TEAM 1"
  },
  {
    value: 1,
    displayText: "TEAM 2"
  },
  {
    value: 2,
    displayText: "TEAM 3"
  }
]

@Component({
  selector: 'app-enter-result',
  templateUrl: './enter-result.component.html',
  styleUrl: './enter-result.component.scss'
})
export class EnterResultComponent {
  selectOptions: ListOption[] = TEAMS;
  fixturesData: Game[] = gamesArray;
  public addGameFormGroup: FormGroup = new FormGroup({
    homeTeamID: new FormControl(0),
    awayTeamID: new FormControl(0),
    homeTeamGoalsAmount: new FormControl(0),
    awayTeamGoalsAmount: new FormControl(0),
  });

  constructor() { }

  addGame() {

  }

  onSelectChange(team: string, $event: any): void {
    team === 'home' ? this.addGameFormGroup.get('homeTeamID')?.setValue($event) : this.addGameFormGroup.get('awayTeamID')?.setValue($event);
  }

  getFormControlValue(formControlName: string): any {
    return this.addGameFormGroup.get(formControlName)?.value;
  }
}
