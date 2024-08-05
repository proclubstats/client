import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TeamService } from '../../services/team.service';
import { TeamDTO } from '@pro-clubs-manager/shared-dtos';

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

  onArrowBackClick() : void {
    history.back();
  }
  
}