import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPlayerDataRequest } from '../../shared/models/addPlayerDataRequest';
import { ListOption } from '../../shared/models/list-option.model';
import { PLAYABLE_POSITIONS_OPTIONS } from '../top-scorers/top-scorers.definitions';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signUpFormGroup: FormGroup = new FormGroup({});
  userFile: FormData = new FormData();
  playablePositionOptions: ListOption[] = [];

  formControls = [
    { control: new FormControl('', Validators.required), field: 'firstname', displayText: 'First Name', type: 'text-input', maxLength: 20 },
    { control: new FormControl('', Validators.required), field: 'lastname', displayText: 'Last Name', type: 'text-input', maxLength: 20 },
    { control: new FormControl('', Validators.required), field: 'username', displayText: 'Username', type: 'text-input', maxLength: 20 },
    { control: new FormControl('', Validators.required), field: 'age', displayText: 'Age', type: 'text-input', maxLength: 2 },
    { control: new FormControl(''), field: 'phone', displayText: 'Phone', type: 'text-input', maxLength: 10 },
    { control: new FormControl('', Validators.required), field: 'position', displayText: 'Position', type: 'select' },
    { control: new FormControl(''), field: 'playablePositions', displayText: 'Playable Positions', type: 'multi-select' },
    { control: new FormControl(''), field: 'password', displayText: 'Password', type: 'password' },
    { control: new FormControl(''), field: 'confirmedPassword', displayText: 'Confirm Password', type: 'password' },

  ];

  constructor() { }

  ngOnInit() {
    this.playablePositionOptions = [...PLAYABLE_POSITIONS_OPTIONS];
    this.loadFormControl();

  }

  loadFormControl() {
    let group: any = {};
    this.formControls.forEach(item => {
      group[item.field] = item.control;
    });

    this.signUpFormGroup = new FormGroup(group);
  }

  async onSubmit() {
    if (this.signUpFormGroup.valid) {
      const convertedForm = this.convertFormToModel();
      
      // Here you can send form data to your backend or perform any necessary action
    } else {
    }
  }

   // when the user presses on submit, converting the form group into model before passing it to the server
   convertFormToModel(): AddPlayerDataRequest {
    const convertedForm: AddPlayerDataRequest = this.signUpFormGroup.value;

    //if there's no playable positions -> set only the primary position, else add the primary position
    this.signUpFormGroup.get('playablePositions')!.value == '' ? convertedForm.playablePositions = [convertedForm.position]
      : convertedForm.playablePositions.push(convertedForm.position);
    //convertedForm.teamId = this.teamID;

    var jsonForm = JSON.parse(JSON.stringify(convertedForm));

    Object.keys(jsonForm).forEach(key => {
      this.userFile.append(key, jsonForm[key]);
    });

    return convertedForm;
  }

  isRequiredForm(control: FormControl) {
    if (control.errors) {
      return control.errors['required'];
    }

    return false;
  }

  onSelectionChange($chosenPosition: ListOption) {
    if (!$chosenPosition) return;

    this.signUpFormGroup.get('position')?.setValue($chosenPosition.displayText);

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

    this.signUpFormGroup.get('playablePositions')?.setValue(positionsValuesOnly);

  }

  onFileSelected($event: any) {
    if (!$event.target.files)
      return;

    const file: File = $event.target.files[0];
    this.userFile.append('file', file);
  }
}
