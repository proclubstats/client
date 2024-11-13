import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UpdatePlayerPerformanceDataRequest } from '../shared/models/game.model';
import { GameDTO } from '@pro-clubs-manager/shared-dtos';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  GAME_CONTROLLER_URL = "game";

  constructor(private apiService: ApiService) { }

  async getGameById(id: string): Promise<GameDTO> {
    const response = await this.apiService.get<GameDTO>(`${this.GAME_CONTROLLER_URL}/${id}/`);

    return response.data;
  }

  async getAllGames(): Promise<GameDTO[]> {
    const response = await this.apiService.get<GameDTO[]>(`${this.GAME_CONTROLLER_URL}/`);

    return response.data;
  }

  async deleteGame(id: string): Promise<GameDTO> {
    const response = await this.apiService.delete<GameDTO>(`${this.GAME_CONTROLLER_URL}/${id}/`);

    return response.data;
  }

  async updateGameResult(id: string, homeTeamGoals: number, awayTeamGoals: number, date: Date): Promise<GameDTO> {
    const response = await this.apiService.put<GameDTO>(`${this.GAME_CONTROLLER_URL}/${id}/updateResult`,
      { homeTeamGoals: homeTeamGoals, awayTeamGoals: awayTeamGoals, date: date });

    return response.data;
  }

  async updateTeamPlayersPerformance(gameId: string, playersPerformace: UpdatePlayerPerformanceDataRequest[], isHomeTeam: boolean): Promise<any> {
    const response = await this.apiService.put<any>(`${this.GAME_CONTROLLER_URL}/${gameId}/teamPlayersPerformance`,
      { playersPerformace: playersPerformace, isHomeTeam: isHomeTeam });

    return response.data;
  }

  async getTeamGames(teamId: string): Promise<GameDTO[]> {
    const response = await this.apiService.get<GameDTO[]>(`${this.GAME_CONTROLLER_URL}/team/${teamId}`);

    return response.data;
  }
}