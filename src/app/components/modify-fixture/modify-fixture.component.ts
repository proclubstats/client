import { Component, Input } from '@angular/core';
import { Fixture } from '../../shared/models/game.model';
import { ListOption } from '../../shared/models/list-option.model';
import { PlayerStat } from '../../shared/models/player-stat.model';

@Component({
  selector: 'modify-fixture',
  templateUrl: './modify-fixture.component.html',
  styleUrl: './modify-fixture.component.scss'
})
export class ModifyFixtureComponent {

  homeTeamPlayersOptions: ListOption[] = [];
  awayTeamPlayersOptions: ListOption[] = [];

  homeTeamGoalsAmount: number = 0;
  awayTeamGoalsAmount: number = 0;

  homeTeamScorers: PlayerStat[] = [];
  homeTeamAssisters: PlayerStat[] = [];
  awayTeamScorers: PlayerStat[] = [];
  awayTeamAssisters: PlayerStat[] = [];

  @Input() selectedFixture: Fixture | undefined = undefined;
  constructor() { }

  ngOnInit() {
    this.homeTeamGoalsAmount = this.selectedFixture?.homeTeamDetails.teamGoalsAmount!;
    this.awayTeamGoalsAmount = this.selectedFixture?.awayTeamDetails.teamGoalsAmount!;
    this.loadPlayersOptions();
  }

  loadPlayersOptions() {
    // this.homeTeamPlayersOptions = PLAYERS_DATA.filter(player => player.teamID === this.selectedFixture?.homeTeamDetails.teamID).map(player => {
    //   const option = { value: player.id, displayText: player.name } as ListOption;
    //   return option;
    // });

    // this.awayTeamPlayersOptions = PLAYERS_DATA.filter(player => player.teamID === this.selectedFixture?.awayTeamDetails.teamID).map(player => {
    //   const option = { value: player.id, displayText: player.name } as ListOption;
    //   return option;
    // });

    
  }

  onSelectionChange($chosenPlayer: ListOption, playerId: string) {
    if (!$chosenPlayer) return;
    playerId = $chosenPlayer.value;
    //this.addPlayerFormGroup.get('Position')?.setValue($chosenPosition.displayText);

  }

  addNewPlayerStat(location: string) {
    switch (location) {
      case 'home-scorer': {
        this.selectedFixture?.homeTeamDetails.teamScorers!.push(new PlayerStat());
        break;
      }
      case 'home-assister': {
        this.selectedFixture?.homeTeamDetails.teamAssists!.push(new PlayerStat());
        break;
      }
      case 'away-scorer': {
        this.selectedFixture?.awayTeamDetails.teamScorers!.push(new PlayerStat());
        break;
      }
      case 'away-assister': {
        this.selectedFixture?.awayTeamDetails.teamAssists!.push(new PlayerStat());
        break;
      }
      default: break;
    }
  };

  onSaveClick() {
    console.log('avi');
  }
}
