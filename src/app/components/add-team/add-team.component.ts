import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.scss'
})
export class AddTeamComponent {
  addTeamFormGroup: FormGroup;

  formControls = [
    { control: new FormControl(''), fieldName: 'name', displayText: 'Name', maxLength: 11 }
  ];

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
