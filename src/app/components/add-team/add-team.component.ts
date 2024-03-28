import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateTeamModel } from '../../shared/models/team.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.scss'
})
export class AddTeamComponent {
  addTeamFormGroup: FormGroup;
  LEAGUE_ID = "65ecb1eb2f272e434483a821";

  formControls = [
    { control: new FormControl(''), fieldName: 'name', displayText: 'Name' },
    { control: new FormControl(''), fieldName: 'photo-url', displayText: 'Photo URL' }
  ];

  constructor(private teamService: TeamService) {
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

  async onSubmit() {
    if (this.addTeamFormGroup.valid) {
      var createTeamModel = this.convertFormToModel();
      const createTeamResponse = await this.teamService.createTeam(createTeamModel);

      window.alert(`${createTeamResponse.name} Added Successfuly`);
    }
  }

  convertFormToModel(): CreateTeamModel {
    const formValues = this.addTeamFormGroup.value;
    return {
      name: formValues.name,
      leagueId: this.LEAGUE_ID,
      logoUrl: formValues['photo-url']
    };
  }

  selectFile() {
    const fileInput = document.getElementById('customFile');
    fileInput?.click(); // Trigger click event on the hidden file input
  }

  onFileSelected($event: any) {
    if (!$event.target.files)
      return;

    const file: File = $event.target.files[0];
    this.addTeamFormGroup.get('photo-url')?.setValue(file.name);
    // You can now handle the selected file (e.g., upload it, display it, etc.)
  }
}
