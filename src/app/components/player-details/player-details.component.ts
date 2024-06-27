import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { PlayerDTO } from '../../shared/models/player.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss'
})
export class PlayerDetailsComponent {
  playerID: string = '';
  chosenPlayer: PlayerDTO | null = null;
  editPlayerMode: boolean = false;
  editedPlayerName: string | null = null;
  editPlayerPhotoModel: FormData | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private playerService: PlayerService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.loadPlayerData();
  }

  private async loadPlayerData(): Promise<void> {
    this.playerID = this.route.snapshot.paramMap.get('id') || this.playerID;

    this.chosenPlayer = await this.playerService.getPlayerById(this.playerID);
  }

  navigateToTeamDetails(): void {
    this.router.navigate(['/team-details', { id: this.chosenPlayer!.team!.id }]);
  }

  async setPlayerImage(file: File) {
    this.editPlayerPhotoModel = new FormData();
    this.editPlayerPhotoModel.append('file', file);

  }

  onFileSelected($event: any) {
    if (!$event.target.files)
      return;

    const file: File = $event.target.files[0];
    this.setPlayerImage(file);
  }

  onEditClick() {
    this.editedPlayerName = this.chosenPlayer!.name;
    this.editPlayerMode = true;
  }

  onCancelEditClick() {
    this.editPlayerMode = false;
  }

  async deletePlayer() {
    const serverResponse = await this.playerService.deletePlayer(this.chosenPlayer!.id);

    this.notificationService.success(`${this.chosenPlayer!.name} deleted successfuly`);

    this.onArrowBackClick();
  }

  onArrowBackClick(): void {
    history.back();
  }

  async onSaveClick() {
    if (this.editPlayerPhotoModel) {
      const response = await this.playerService.setPlayerImage(this.editPlayerPhotoModel!, this.playerID);
      this.editPlayerPhotoModel = null;
      this.editPlayerMode = false;
      this.chosenPlayer!.imgUrl = response;
    }

    if (this.chosenPlayer!.name !== this.editedPlayerName) {
      const response = await this.playerService.renamePlayer(this.playerID, this.editedPlayerName!);
      this.editedPlayerName = null;
      this.editPlayerMode = false;
      this.chosenPlayer!.name = response;
    }
  }
}