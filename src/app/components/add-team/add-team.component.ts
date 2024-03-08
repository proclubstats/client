import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ADD_TEAM_FORM_CONTROLS } from './add-team.definitions';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.scss'
})
export class AddTeamComponent {
  addTeamFormGroup: FormGroup;

  formControls = ADD_TEAM_FORM_CONTROLS;

  constructor() {
    let group: any = {};
    this.formControls.forEach(item => {
      group[item.fieldName] = item.control;
    });

    this.addTeamFormGroup = new FormGroup(group);
  }

  ngOnInit() {

  }

  clearForm() {
    this.addTeamFormGroup.reset();
  }

  onSubmit() {
    if (this.addTeamFormGroup.valid) {
      console.log('Form submitted successfully!');
      console.log('Form value:', this.addTeamFormGroup.value);
      // Here you can send form data to your backend or perform any necessary action
    } else {
      console.log('Form submission failed! Please check the form.');
    }
  }
}
