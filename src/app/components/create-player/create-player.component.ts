import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { PLAYABLE_POSITIONS_OPTIONS } from '../top-scorers/top-scorers.definitions';
import { ActivatedRoute } from '@angular/router';
import { ListOption } from '../../shared/models/list-option.model';
import { AddPlayerDataRequest } from '../../shared/models/addPlayerDataRequest';
import { PlayerService } from '../../services/player.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'create-player',
  templateUrl: './create-player.component.html',
  styleUrl: './create-player.component.scss'
})

export class CreatePlayerComponent {
  addPlayerFormGroup: FormGroup = new FormGroup({});
  addPlayerFile: FormData = new FormData();


  formControls = [
    { control: new FormControl('', Validators.required), field: 'name', displayText: 'Name', type: 'text-input', maxLength: 25 },
    { control: new FormControl(''), field: 'phone', displayText: 'Phone', type: 'text-input', maxLength: 10 },
    { control: new FormControl('', Validators.required), field: 'age', displayText: 'Age', type: 'text-input', maxLength: 2 },
    { control: new FormControl('', Validators.required), field: 'position', displayText: 'Position', type: 'select' },
    { control: new FormControl(''), field: 'playablePositions', displayText: 'Playable Positions', type: 'multi-select' }
  ];

  playablePositionOptions: ListOption[] = [];

  constructor(private playersService: PlayerService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.playablePositionOptions = [...PLAYABLE_POSITIONS_OPTIONS];
    this.loadFormControl();
  }

  loadFormControl() {
    let group: any = {};
    this.formControls.forEach(item => {
      group[item.field] = item.control;
    });

    this.addPlayerFormGroup = new FormGroup(group);
  }

  clearForm() {
    this.addPlayerFormGroup.reset();
  }

  isRequiredForm(control: FormControl) {
    if (control.errors) {
      return control.errors['required'];
    }

    return false;
  }

  async onSubmit() {
    if (this.addPlayerFormGroup.valid) {
      const convertedForm = this.convertFormToModel();
      const response = await this.playersService.addPlayer(this.addPlayerFile);

      if (response) {
        this.playablePositionOptions = [...PLAYABLE_POSITIONS_OPTIONS];
        this.notificationService.success(`${convertedForm.name} created successfuly`);
        this.clearForm();
      }
    }
  }

  // when the user presses on submit, converting the form group into model before passing it to the server
  convertFormToModel(): AddPlayerDataRequest {
    const convertedForm: AddPlayerDataRequest = this.addPlayerFormGroup.value;

    //if there's no playable positions -> set only the primary position, else add the primary position
    this.addPlayerFormGroup.get('playablePositions')!.value == '' ? convertedForm.playablePositions = [convertedForm.position]
      : convertedForm.playablePositions.push(convertedForm.position);

    var jsonForm = JSON.parse(JSON.stringify(convertedForm));

    Object.keys(jsonForm).forEach(key => {
      this.addPlayerFile.append(key, jsonForm[key]);
    });

    return convertedForm;
  }

  onSelectionChange($chosenPosition: ListOption) {
    if (!$chosenPosition) return;

    this.addPlayerFormGroup.get('position')?.setValue($chosenPosition.displayText);

    // removing the selected position from the playable positions options
    var index = this.playablePositionOptions.findIndex(position => position === $chosenPosition);
    if (index > 1) {
      this.playablePositionOptions = [...PLAYABLE_POSITIONS_OPTIONS];
      this.playablePositionOptions.splice(index, 1);
    }
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
    this.addPlayerFile.append('file', file);
  }
}