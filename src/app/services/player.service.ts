import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  PLAYERS_CONTROLLER_URL = "players/";

  constructor() { }

  async addPlayer(data: any) {
    
  }
}