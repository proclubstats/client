import { Component, Input } from '@angular/core';
import { Fixture } from '../../shared/models/game.model';
import { PlayerService } from '../../services/player.service';
import { IPlayer } from '../../shared/models/player.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent {
  @Input() selectedFixture: Fixture | undefined = undefined;

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
  }

  convertPlayerIdToName(playerId: string): string {
    var playerName: string = '';
    this.playerService.getPlayerById(playerId).then((serverResponse: IPlayer) => {
      if (!serverResponse) {
        return playerName;
      }

      playerName = serverResponse.name;
      return playerName;
    })

    return playerName;
  }


}