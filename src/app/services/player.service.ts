import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  PLAYERS_CONTROLLER_URL = "player/";

  constructor(private apiService: ApiService) { }

  getAllPlayers() : Promise<any>{
      return this.apiService.get(`${this.PLAYERS_CONTROLLER_URL}`);
  }

  getPlayerById(id: string): Promise<any> {
    return this.apiService.get(`${this.PLAYERS_CONTROLLER_URL}`, id);
  }

  addPlayer(data: any): Promise<any> {
    return this.apiService.post(`${this.PLAYERS_CONTROLLER_URL}`, data);
  }

  deletePlayer(id: string): Promise<any> {
    return this.apiService.delete(`${this.PLAYERS_CONTROLLER_URL}`, id);
  }
}