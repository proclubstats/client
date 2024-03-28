import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { PLAYABLE_POSITIONS_OPTIONS } from '../top-scorers/top-scorers.definitions';
import { ActivatedRoute } from '@angular/router';
import { TEAMS_DATA } from '../league-table/league-table.mock';
import { ListOption } from '../../shared/models/list-option.model';
import { AddPlayerDataRequest } from '../../shared/models/addPlayerDataRequest';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss'
})

export class AddPlayerComponent {
  addPlayerFormGroup: FormGroup = new FormGroup({});
  teamID: string = '';
  teamName: string = '';

  formControls = [
    { control: new FormControl(''), field: 'name', displayText: 'Name', type: 'text-input' },
    { control: new FormControl(''), field: 'phone', displayText: 'Phone', type: 'text-input' },
    { control: new FormControl(''), field: 'age', displayText: 'Age', type: 'text-input' },
    { control: new FormControl(''), field: 'position', displayText: 'Position', type: 'select' },
    { control: new FormControl(''), field: 'playablePositions', displayText: 'Playable Positions', type: 'multi-select' },
    { control: new FormControl(''), field: 'imgUrl', displayText: 'Image URL', type: 'photo' }
  ];

  playablePositionOptions = PLAYABLE_POSITIONS_OPTIONS;

  constructor(private route: ActivatedRoute, private playersService: PlayerService) { }

  ngOnInit() {
    this.loadFormControl();
    this.loadSelectedTeam();
  }

  loadFormControl() {
    let group: any = {};
    this.formControls.forEach(item => {
      group[item.field] = item.control;
    });

    this.addPlayerFormGroup = new FormGroup(group);
  }

  private loadSelectedTeam(): void {
    this.teamID = this.route.snapshot.paramMap.get('id') || this.teamID;

    if (!this.teamID) { return; }

    this.teamName = TEAMS_DATA.find(team => team.teamId === this.teamID)?.teamName!;

  }

  clearForm() {
    this.addPlayerFormGroup.reset();
  }

  async onSubmit() {
    if (this.addPlayerFormGroup.valid) {
      const convertedForm = this.convertFormToModel();
      const response = await this.playersService.addPlayer(convertedForm);

      console.log('Form value:', this.addPlayerFormGroup.value);
      // Here you can send form data to your backend or perform any necessary action
    } else {
      console.log('Form submission failed! Please check the form.');
    }
  }

  // when the user presses on submit, converting the form group into model before passing it to the server
  convertFormToModel(): AddPlayerDataRequest {
    const convertedForm: AddPlayerDataRequest = this.addPlayerFormGroup.value;
    convertedForm.teamId = this.teamID;
    return convertedForm;
  }

  onSelectionChange($chosenPosition: ListOption) {
    if (!$chosenPosition) return;

    this.addPlayerFormGroup.get('position')?.setValue($chosenPosition.displayText);

  }

  onMultipleSelectionChange($chosenPositions: ListOption[]): void {
    if (!$chosenPositions) return;
    var positionsValuesOnly = $chosenPositions.map(position => { return position.displayText });

    this.addPlayerFormGroup.get('playablePositions')?.setValue(positionsValuesOnly);

  }

  onFileSelected($event: any) {
    if (!$event.target.files)
      return;

    const file: File = $event.target.files[0];
    this.addPlayerFormGroup.get('imgUrl')?.setValue(file.name);
    // You can now handle the selected file (e.g., upload it, display it, etc.)
  }
}
