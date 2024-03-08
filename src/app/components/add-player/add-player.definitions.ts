import { FormControl } from "@angular/forms";

export const ADD_PLAYER_FORM_CONTROLS = [
    { control: new FormControl(''), displayText: 'Name' },
    { control: new FormControl(''), displayText: 'Phone' },
    { control: new FormControl(''), displayText: 'Age' },
    { control: new FormControl(''), displayText: 'Team' },
    { control: new FormControl(''), displayText: 'Position' },
    { control: new FormControl(''), displayText: 'Playable Positions' }
  ];