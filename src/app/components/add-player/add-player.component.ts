import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss'
})
export class AddPlayerComponent {
  addPlayerFormGroup: FormGroup;

  formControls = [
    { control: new FormControl(''), displayText: 'Name' },
    { control: new FormControl(''), displayText: 'Phone' },
    { control: new FormControl(''), displayText: 'Age' },
    { control: new FormControl(''), displayText: 'Team' },
    { control: new FormControl(''), displayText: 'Position' },
    { control: new FormControl(''), displayText: 'Playable Positions' }
  ];

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
