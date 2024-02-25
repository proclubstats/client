import { Component } from '@angular/core';
import { Team } from '../../shared/models/team.model';
import { ActivatedRoute } from '@angular/router';
import { ELEMENT_DATA } from '../league-table/league-table.mock';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.scss'
})
export class TeamDetailsComponent {

  teamID: number = 0;
  chosenTeam?: Team;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(event => {
      if (event['id']) {
        this.teamID = parseInt(event['id']);
      }
    });

    this.chosenTeam = ELEMENT_DATA.find(team => team.id === this.teamID);
  }
}