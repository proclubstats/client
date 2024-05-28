import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AddPlayerDataRequest } from '../shared/models/addPlayerDataRequest';
import { IPlayer, PlayerDTO } from '../shared/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  PLAYERS_CONTROLLER_URL = "player";

  constructor(private apiService: ApiService) { }

  async getAllPlayers(): Promise<IPlayer[]> {
    const response = await this.apiService.get<IPlayer[]>(`${this.PLAYERS_CONTROLLER_URL}/`);

    return response.data;
  }

  async getPlayerById(id: string): Promise<PlayerDTO> {
    const response = await this.apiService.get<PlayerDTO>(`${this.PLAYERS_CONTROLLER_URL}/${id}/`);

    return response.data;
  }

  async setPlayerImage(playerPhoto: FormData, playerId: string) : Promise<string> {
    const response = await this.apiService.patch<string>(`${this.PLAYERS_CONTROLLER_URL}/${playerId}/setImage/`, playerPhoto);

    return response.data;
  }

  async renamePlayer(playerId: string, playerName: string) : Promise<string> {
    const response = await this.apiService.patch<string>(`${this.PLAYERS_CONTROLLER_URL}/${playerId}/rename/`, playerName);

    return response.data;
  }

  async addPlayer(playerRequestModel: FormData): Promise<IPlayer> {
    const response = await this.apiService.post<IPlayer>(`${this.PLAYERS_CONTROLLER_URL}/`, playerRequestModel);

    return response.data;
  }

  async deletePlayer(id: string): Promise<void> {
    await this.apiService.delete<void>(`${this.PLAYERS_CONTROLLER_URL}/${id}`);
  }
}