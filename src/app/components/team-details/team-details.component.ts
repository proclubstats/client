import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {  TeamDTO } from '../../shared/models/team.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.scss'
})
export class TeamDetailsComponent {

  teamID: string = '';
  chosenTeam: TeamDTO | null = null;
  constructor(private route: ActivatedRoute, private teamService: TeamService) { }

  ngOnInit() {
    this.loadTeamDetails();
  }

  async loadTeamDetails() : Promise<void>{
    this.teamID = this.route.snapshot.paramMap.get('id') || this.teamID;

    this.chosenTeam = await this.teamService.getTeamById(this.teamID);
  }
  
}