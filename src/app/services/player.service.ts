import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AddPlayerDataRequest } from '../shared/models/addPlayerDataRequest';
import { IPlayer } from '../shared/models/player.model';

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

  async getPlayerById(id: string): Promise<IPlayer> {
    const response = await this.apiService.get<IPlayer>(`${this.PLAYERS_CONTROLLER_URL}/${id}/`);

    return response.data;
  }

  async addPlayer(data: AddPlayerDataRequest): Promise<IPlayer> {
    const response = await this.apiService.post<IPlayer>(`${this.PLAYERS_CONTROLLER_URL}/`, data);

    return response.data;
  }

  async deletePlayer(id: string): Promise<void> {
    await this.apiService.delete<void>(`${this.PLAYERS_CONTROLLER_URL}/`, id);
  }
}