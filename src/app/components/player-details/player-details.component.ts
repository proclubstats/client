import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { IPlayer } from '../../shared/models/player.model';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss'
})
export class PlayerDetailsComponent {
  playerID: string = '';
  chosenPlayer: IPlayer | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.loadPlayerData();
  }

  private async loadPlayerData(): Promise<void> {
    this.playerID = this.route.snapshot.paramMap.get('id') || this.playerID;

    this.chosenPlayer = await this.playerService.getPlayerById(this.playerID);
  }

  navigateToTeamDetails(): void {
    this.router.navigate(['/team-details', { id: this.chosenPlayer!.team }]);
  }
}