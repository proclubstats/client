import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { UpdatePlayerPerformanceDataRequest } from '../../shared/models/game.model';
import { ListOption } from '../../shared/models/list-option.model';
import { TeamService } from '../../services/team.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { NotificationService } from '../../services/notification.service';
import { PLAYABLE_POSITIONS_OPTIONS } from '../top-scorers/top-scorers.definitions';
import { GAME_STATUS, GameDTO, PlayerDTO } from '@pro-clubs-manager/shared-dtos';

@Component({
  selector: 'modify-game',
  templateUrl: './modify-game.component.html',
  styleUrl: './modify-game.component.scss'
})
export class ModifyGameComponent {
  allHomeTeamPlayers: PlayerDTO[] | undefined = undefined;
  allAwayTeamPlayers: PlayerDTO[] | undefined = undefined;
  playersStatsFormGroup: FormGroup | undefined = undefined;
  homeTeamPlayersOptions: ListOption[] | undefined = undefined;
  awayTeamPlayersOptions: ListOption[] | undefined = undefined;
  isLoading: boolean = false;
  homeTeamGoalsAmount: number = 0;
  awayTeamGoalsAmount: number = 0;
  selectedGame: GameDTO | undefined = undefined;
  playablePositionOptions: ListOption[] = [...PLAYABLE_POSITIONS_OPTIONS];

  @Input() selectedGameId: string | undefined = undefined;

  @Output() onSaveEvent: EventEmitter<void> = new EventEmitter();

  constructor(private teamService: TeamService, private formBuilder: FormBuilder, private cdRef: ChangeDetectorRef,
    private gameService: GameService, private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.loadGameDetails();
  }

  async loadGameDetails() {
    this.selectedGame = await this.gameService.getGameById(this.selectedGameId!);

    if (this.selectedGame!.status === GAME_STATUS.SCHEDULED) {
      this.homeTeamGoalsAmount = 0;
      this.awayTeamGoalsAmount = 0;
    }
    else {
      this.homeTeamGoalsAmount = this.selectedGame!.result!.homeTeamGoals!;
      this.awayTeamGoalsAmount = this.selectedGame!.result!.awayTeamGoals!;
    }

    this.loadPlayersOptions();

    this.initForms();
  }

  initForms() {
    this.playersStatsFormGroup = this.formBuilder.group({
      homeTeamPlayers: this.formBuilder.array([]),
      awayTeamPlayers: this.formBuilder.array([]),
      homeTeamGoals: this.formBuilder.array([]),
      awayTeamGoals: this.formBuilder.array([]),
    });

    if (this.selectedGame!.homeTeam.playersPerformance && this.selectedGame!.homeTeam.playersPerformance!.length > 0) {
      this.homeTeamPlayers.clear();
      this.selectedGame!.homeTeam.playersPerformance.forEach(playerPerformance => {
        if (!playerPerformance.positionPlayed) {
          playerPerformance.positionPlayed = '';
        }
        this.homeTeamPlayers.push(this.formBuilder.group(playerPerformance));
      });
    }

    if (this.selectedGame!.awayTeam.playersPerformance && this.selectedGame!.awayTeam.playersPerformance!.length > 0) {
      this.awayTeamPlayers.clear();
      this.selectedGame!.awayTeam.playersPerformance.forEach(playerPerformance => {
        if (!playerPerformance.positionPlayed) {
          playerPerformance.positionPlayed = '';
        }
        this.awayTeamPlayers.push(this.formBuilder.group(playerPerformance));
      });
    }
  };

  get homeTeamPlayers(): FormArray {
    return this.playersStatsFormGroup!.get('homeTeamPlayers') as FormArray;
  }

  get awayTeamPlayers(): FormArray {
    return this.playersStatsFormGroup!.get('awayTeamPlayers') as FormArray;
  }

  get homeTeamGoals(): FormArray {
    return this.playersStatsFormGroup!.get('homeTeamGoals') as FormArray;
  }
  get awayTeamGoals(): FormArray {
    return this.playersStatsFormGroup!.get('awayTeamGoals') as FormArray;
  }

  addPlayer(toHomeTeam: boolean) {
    const playerGroup = this.formBuilder.group({
      playerId: ['', Validators.required],
      positionPlayed: ['', Validators.required],
      rating: [0, Validators.required],
      goals: [0],
      assists: [0],
      playerOfTheMatch: [false]
    });

    toHomeTeam ? (this.homeTeamPlayers.push(playerGroup)) : (this.awayTeamPlayers.push(playerGroup));
  };

  addFullTeam(toHomeTeam: boolean) {
    const playersAmount = toHomeTeam ? this.homeTeamPlayers.length : this.awayTeamPlayers.length;

    for (let i = 0; i < (11 - playersAmount); i++) {
      this.addPlayer(toHomeTeam);
    }
  }

  addGoal(toHomeTeam: boolean) {
    const goalGroup = this.formBuilder.group({
      scorerId: ['', Validators.required],
      assisterId: [''],
      minute: [0],
      isOwnGoal: [false]
    });

    toHomeTeam ? (this.homeTeamGoals.push(goalGroup)) : (this.awayTeamGoals.push(goalGroup));
  }

  removePlayer(isHomeTeam: boolean, index: number): void {
    isHomeTeam ? (this.homeTeamPlayers.removeAt(index)) : (this.awayTeamPlayers.removeAt(index));
  }

  isScoreModified(): boolean {
    return (this.homeTeamGoalsAmount != this.selectedGame!.result!.homeTeamGoals ||
      this.awayTeamGoalsAmount != this.selectedGame!.result!.awayTeamGoals)
  }

  async submitForm() {
    let updateScoreModel: UpdatePlayerPerformanceDataRequest[] = [];

    const formAsObject = this.playersStatsFormGroup!.value;
    const homeTeamPlayerStats = formAsObject.homeTeamPlayers;
    const awayTeamPlayerStats = formAsObject.awayTeamPlayers;

    if (this.isScoreModified()) {
      const serverResponse = await this.gameService.updateGameResult(this.selectedGame!.id, this.homeTeamGoalsAmount, this.awayTeamGoalsAmount, new Date());

      if (serverResponse) {
        this.notificationService.success(`Result: ${this.selectedGame!.homeTeam.name} ${this.homeTeamGoalsAmount} : ${this.awayTeamGoalsAmount} ${this.selectedGame!.awayTeam.name} updated successfuly`);
      }
    }

    if (homeTeamPlayerStats.length > 0) {
      updateScoreModel = homeTeamPlayerStats;
      const homeTeamResponse = await this.gameService.updateTeamPlayersPerformance(this.selectedGame!.id, updateScoreModel, true);

      if (homeTeamResponse) {
        this.notificationService.success(`${this.selectedGame!.homeTeam.name}'s players performance updated successfuly`);
        this.onSaveEvent.emit();
      }
    }

    if (awayTeamPlayerStats.length > 0) {
      updateScoreModel = awayTeamPlayerStats;
      const awayTeamResponse = await this.gameService.updateTeamPlayersPerformance(this.selectedGame!.id, updateScoreModel, false);
      if (awayTeamResponse) {
        this.notificationService.success(`${this.selectedGame!.awayTeam.name}'s players performance updated successfuly`);
        this.onSaveEvent.emit();
      }
    }
  }

  async loadPlayersOptions() {
    this.allHomeTeamPlayers = await this.teamService.getPlayersByTeam(this.selectedGame!.homeTeam.id);
    this.allAwayTeamPlayers = await this.teamService.getPlayersByTeam(this.selectedGame!.awayTeam.id);

    this.homeTeamPlayersOptions = this.allHomeTeamPlayers.map(player => { return { value: player.id, displayText: player.name } });
    this.awayTeamPlayersOptions = this.allAwayTeamPlayers.map(player => { return { value: player.id, displayText: player.name } });

    this.isLoading = false;
  }

  onSelectionChange(selectType: string, $chosenOption: ListOption, isHomeTeam: boolean, index: number) {
    if (!$chosenOption) return;

    if (selectType === 'position') {
      isHomeTeam ? (this.homeTeamPlayers.at(index).get('positionPlayed')?.setValue($chosenOption.value)) :
        (this.awayTeamPlayers.at(index).get('positionPlayed')?.setValue($chosenOption.value));
    }

    else {
      isHomeTeam ? (this.homeTeamPlayers.at(index).get('playerId')?.setValue($chosenOption.value)) :
        (this.awayTeamPlayers.at(index).get('playerId')?.setValue($chosenOption.value));

      // const playerPosition = isHomeTeam ? this.allHomeTeamPlayers!.at(index)!.position :
      //   this.allAwayTeamPlayers!.at(index)!.position;

      //this.onSelectionChange('position', { displayText: playerPosition, value: playerPosition }, isHomeTeam, index);
      //this.cdRef.detectChanges();
    }
  }
}
