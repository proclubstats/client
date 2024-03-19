import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { PLAYABLE_POSITIONS_OPTIONS } from '../top-scorers/top-scorers.definitions';
import { ActivatedRoute } from '@angular/router';
import { TEAMS_DATA } from '../league-table/league-table.mock';
import { ListOption } from '../../shared/models/list-option.model';

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
    { control: new FormControl(''), displayText: 'Name', type: 'text-input' },
    { control: new FormControl(''), displayText: 'Phone', type: 'text-input' },
    { control: new FormControl(''), displayText: 'Age', type: 'text-input' },
    { control: new FormControl(''), displayText: 'Position', type: 'select' },
    { control: new FormControl(''), displayText: 'Playable Positions', type: 'multi-select' },
    { control: new FormControl(''), displayText: 'Photo URL', type: 'photo' }
  ];

  playablePositionOptions = PLAYABLE_POSITIONS_OPTIONS;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadFormControl();
    this.loadSelectedTeam();
  }

  loadFormControl() {
    let group: any = {};
    this.formControls.forEach(item => {
      group[item.displayText] = item.control;
    });

    this.addPlayerFormGroup = new FormGroup(group);
  }

  private loadSelectedTeam(): void {
    this.teamID = this.route.snapshot.paramMap.get('id') || this.teamID;

    if (!this.teamID) { return; }

    this.teamName = TEAMS_DATA.find(team => team.id === this.teamID)?.name!;

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

  onSelectionChange($chosenPosition: ListOption) {
    if (!$chosenPosition) return;

    this.addPlayerFormGroup.get('Position')?.setValue($chosenPosition.displayText);

  }

  onMultipleSelectionChange($chosenPositions: ListOption[]): void {
    if (!$chosenPositions) return;
    var positionsValuesOnly = $chosenPositions.map(position => { return position.displayText });

    this.addPlayerFormGroup.get('Playable Positions')?.setValue(positionsValuesOnly);

  }

  onFileSelected($event: any) {
    if (!$event.target.files) 
      return;

    const file: File = $event.target.files[0];
    this.addPlayerFormGroup.get('Photo URL')?.setValue(file.name);
    // You can now handle the selected file (e.g., upload it, display it, etc.)
  }
}
