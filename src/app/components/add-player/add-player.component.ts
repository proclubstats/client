import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ADD_PLAYER_FORM_CONTROLS } from './add-player.definitions';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss'
})
export class AddPlayerComponent {
  addPlayerFormGroup: FormGroup;

  formControls = ADD_PLAYER_FORM_CONTROLS;

  constructor(){
    let group: any = {};
    this.formControls.forEach(item => {
      group[item.displayText] = item.control;
    });

    this.addPlayerFormGroup = new FormGroup(group);
  }

  ngOnInit() {
    
  }

  clearForm() {
    this.addPlayerFormGroup.reset();
  }

  onSubmit() {
    if (this.addPlayerFormGroup.valid) {
      console.log('Form submitted successfully!');
      console.log('Form value:', this.addPlayerFormGroup.value);
      // Here you can send form data to your backend or perform any necessary action
    } else {
      console.log('Form submission failed! Please check the form.');
    }
  }
}
