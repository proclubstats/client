import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PlayerDTO, PlayerLastGamesForm } from '@pro-clubs-manager/shared-dtos';
import { IPlayerStats } from '../shared/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  PLAYERS_CONTROLLER_URL = "player";

  constructor(private apiService: ApiService) { }

  async getAllPlayers(): Promise<PlayerDTO[]> {
    const response = await this.apiService.get<PlayerDTO[]>(`${this.PLAYERS_CONTROLLER_URL}/`);

    return response.data;
  }

  async getPlayerById(id: string): Promise<PlayerDTO> {
    const response = await this.apiService.get<PlayerDTO>(`${this.PLAYERS_CONTROLLER_URL}/${id}/`);

    return response.data;
  }

  async setPlayerImage(playerPhoto: FormData, playerId: string): Promise<void> {
    await this.apiService.patch<void>(`${this.PLAYERS_CONTROLLER_URL}/${playerId}/setImage/`, playerPhoto);
  }

  async renamePlayer(playerId: string, playerName: string): Promise<void> {
    await this.apiService.put<void>(`${this.PLAYERS_CONTROLLER_URL}/${playerId}/rename/`, { newName: playerName });

  }

  async addPlayer(playerRequestModel: FormData): Promise<PlayerDTO> {
    const response = await this.apiService.post<PlayerDTO>(`${this.PLAYERS_CONTROLLER_URL}/`, playerRequestModel);

    return response.data;
  }

  async deletePlayer(playerId: string): Promise<void> {
    await this.apiService.delete<void>(`${this.PLAYERS_CONTROLLER_URL}/${playerId}`);
  }

  async getFreeAgents(): Promise<PlayerDTO[]> {
    const response = await this.apiService.get<PlayerDTO[]>(`${this.PLAYERS_CONTROLLER_URL}/freeAgents`);

    return response.data;
  }

  async getPlayerForm(playerId: string): Promise<PlayerLastGamesForm> {
    const response = await this.apiService.get<PlayerLastGamesForm>(`${this.PLAYERS_CONTROLLER_URL}/${playerId}/form`);

    return response.data;
  }
  
  async getPlayerStatsByPosition(playerId: string): Promise<{ [position: string]: IPlayerStats }> {
    const response = await this.apiService.get<{ [position: string]: IPlayerStats }>(`${this.PLAYERS_CONTROLLER_URL}/${playerId}/statsByPosition`);

    return response.data;
  }
}