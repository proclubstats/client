import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateTeamModel } from '../../shared/models/team.model';
import { TeamService } from '../../services/team.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.scss'
})
export class AddTeamComponent {
  addTeamFormGroup: FormGroup;
  addTeamFile: FormData = new FormData();
  LEAGUE_ID = "65ecb1eb2f272e434483a821";

  constructor(private formBuilder: FormBuilder, private teamService: TeamService, private notificationService: NotificationService) {
    this.addTeamFormGroup = this.formBuilder.group({
      name: ['', Validators.required]
    });
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

      this.notificationService.success(`${createTeamResponse.name} Added Successfuly`);
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
      this.addTeamFile.append('file', file);
  }
}
