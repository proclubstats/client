import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListOption } from '../../shared/models/list-option.model';
import { LeagueService } from '../../services/league.service';
import { LEAGUE_ID } from '../../constants/constants';
import { AddFixtureDataRequest } from '../../shared/models/addFixtureDataRequest';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'add-fixture',
  templateUrl: './add-fixture.component.html',
  styleUrl: './add-fixture.component.scss'
})

export class AddFixtureComponent {
  addFixtureFormGroup: FormGroup | null = null;
  addPlayerFile: FormData = new FormData();
  isLoading: boolean = false;
  sourceTeamsOptions: ListOption[] | null = null;
  teamsOptions: ListOption[] | null = null;

  constructor(private notificationService: NotificationService, private leagueService: LeagueService, private formBuilder: FormBuilder) {
    
  };

  ngOnInit() {
    this.isLoading = true;
    this.initForms();
    this.loadTeams();
  }

  initForms() {
    this.addFixtureFormGroup = this.formBuilder.group({
      startDate: ['', Validators.required], // Date
      endDate: ['', Validators.required], // Date
      round: ['', Validators.required],
      games: this.formBuilder.array([])
    });

    // Add initial 9 items
    for (let i = 0; i < 7; i++) {
      this.games.push(this.formBuilder.group({
        homeTeamId: ['', Validators.required],
        awayTeamId: ['', Validators.required]
      }));
    }
  }

  get games() {
    return this.addFixtureFormGroup!.get('games') as FormArray;
  }
  
  async loadTeams() {
    const teamsResponse = await this.leagueService.getLeagueTable(LEAGUE_ID);
    this.teamsOptions = teamsResponse.map(team => { return { value: team.teamId, displayText: team.teamName } });
    this.sourceTeamsOptions = [...this.teamsOptions];
    this.isLoading = false;
  }

  clearForm() {
    this.addFixtureFormGroup!.reset();
    this.games.setValue([]);
  }

  async onSubmit() {
    if (this.addFixtureFormGroup!.valid) {
      const convertedForm = this.convertFormToModel();
      // Here you can send form data to your backend or perform any necessary action

      const serverResponse = await this.leagueService.createFixture(LEAGUE_ID, convertedForm);
      if (serverResponse) {
        this.notificationService.success(`Fixture #${serverResponse.round} Added successfuly`);
        this.clearForm();
      }

    } else {
    }
  }

  // when the user presses on submit, converting the form group into model before passing it to the server
  convertFormToModel(): AddFixtureDataRequest {
    const convertedForm: AddFixtureDataRequest = this.addFixtureFormGroup!.value;

    return convertedForm;
  }

  onSelectionChange($chosenTeam: ListOption, index: number, isHomeTeam:boolean ) {
    if (!$chosenTeam) return;

    isHomeTeam ?  this.games.at(index).patchValue( {homeTeamId: $chosenTeam.value}) : this.games.at(index).patchValue( {awayTeamId: $chosenTeam.value});

    // var  index= this.teamsOptions!.findIndex(team=> team.value ===  $chosenTeam.value);

    // this.teamsOptions!.splice(index, 1);

  }
}