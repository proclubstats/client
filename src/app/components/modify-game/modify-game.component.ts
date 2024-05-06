import { Component, Input } from '@angular/core';
import { Game, GameDTO, GameFixtureData, GameStatus, TeamGameStatsData, UpdatePlayerPerformanceDataRequest } from '../../shared/models/game.model';
import { ListOption } from '../../shared/models/list-option.model';
import { PlayerStat } from '../../shared/models/player-stat.model';
import { TeamService } from '../../services/team.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'modify-game',
  templateUrl: './modify-game.component.html',
  styleUrl: './modify-game.component.scss'
})
export class ModifyGameComponent {
  playersStatsFormGroup: FormGroup | undefined = undefined;
  homeTeamPlayersOptions: ListOption[] | undefined = undefined;
  awayTeamPlayersOptions: ListOption[] | undefined = undefined;
  isLoading: boolean = false;
  homeTeamGoalsAmount: number = 0;
  awayTeamGoalsAmount: number = 0;
  selectedGame: GameDTO | undefined = undefined;

  @Input() selectedGameId: string | undefined = undefined;

  constructor(private teamService: TeamService, private formBuilder: FormBuilder,
    private gameService: GameService, private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.loadGameDetails();
  }

  async loadGameDetails() {
    this.selectedGame = await this.gameService.getGameById(this.selectedGameId!);

    if (this.selectedGame!.status === GameStatus.SCHEDULED) {
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
        this.homeTeamPlayers.push(this.formBuilder.group(playerPerformance));
      });
    }

    if (this.selectedGame!.awayTeam.playersPerformance && this.selectedGame!.awayTeam.playersPerformance!.length > 0) {
      this.awayTeamPlayers.clear();
      this.selectedGame!.awayTeam.playersPerformance.forEach(playerPerformance => {
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
      rating: [0, Validators.required],
      goals: [0],
      assists: [0],
      playerOfTheMatch: [false]
    });

    toHomeTeam ? (this.homeTeamPlayers.push(playerGroup)) : (this.awayTeamPlayers.push(playerGroup));
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

  async submitForm() {
    let updateScoreModel: UpdatePlayerPerformanceDataRequest[] = [];

    const formAsObject = this.playersStatsFormGroup!.value;
    const homeTeamPlayerStats = formAsObject.homeTeamPlayers;
    const awayTeamPlayerStats = formAsObject.awayTeamPlayers;


    if (homeTeamPlayerStats.length > 0) {
      updateScoreModel = homeTeamPlayerStats;
      const homeTeamResponse = await this.gameService.updateTeamPlayersPerformance(this.selectedGame!.id, updateScoreModel, true);

      if (homeTeamResponse) {
        this.notificationService.success(`${this.selectedGame!.homeTeam.name}'s players performance updated successfuly`);
      }
    }

    if (awayTeamPlayerStats.length > 0) {
      updateScoreModel = awayTeamPlayerStats;
      const awayTeamResponse = await this.gameService.updateTeamPlayersPerformance(this.selectedGame!.id, updateScoreModel, false);
      if (awayTeamResponse) {
        this.notificationService.success(`${this.selectedGame!.awayTeam.name}'s players performance updated successfuly`);
      }
    }

  }

  async loadPlayersOptions() {
    const homeTeamPlayersResponse = await this.teamService.getPlayersByTeam(this.selectedGame!.homeTeam.id);
    const awayTeamPlayersResponse = await this.teamService.getPlayersByTeam(this.selectedGame!.awayTeam.id);

    this.homeTeamPlayersOptions = homeTeamPlayersResponse.map(player => { return { value: player.id, displayText: player.name } });
    this.awayTeamPlayersOptions = awayTeamPlayersResponse.map(player => { return { value: player.id, displayText: player.name } });

    this.isLoading = false;
  }

  onSelectionChange($chosenPlayer: ListOption, isHomeTeam: boolean, index: number) {
    if (!$chosenPlayer) return;

    isHomeTeam ? (this.homeTeamPlayers.at(index).get('playerId')?.setValue($chosenPlayer.value)) :
      (this.awayTeamPlayers.at(index).get('playerId')?.setValue($chosenPlayer.value));

  }
}
