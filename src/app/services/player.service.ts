import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Player } from '../shared/models/player.model';
import { PLAYERS_DATA } from '../components/top-scorers/top-scorers.definitions';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  PLAYERS_CONTROLLER_URL = "player/";

  constructor(private apiService: ApiService) { }

  getAllPlayers() : Promise<any>{
      return this.apiService.get(`${this.PLAYERS_CONTROLLER_URL}`);
  }

  getPlayerById(id: string): any  {
    return PLAYERS_DATA.find(player=> player.id === id);
    // return this.apiService.get(`${this.PLAYERS_CONTROLLER_URL}`, id);
  }

  addPlayer(data: any): Promise<any> {
    return this.apiService.post(`${this.PLAYERS_CONTROLLER_URL}`, data);
  }

  deletePlayer(id: string): Promise<any> {
    return this.apiService.delete(`${this.PLAYERS_CONTROLLER_URL}`, id);
  }
}