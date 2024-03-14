import { Injectable } from '@angular/core';
import { Player } from '../shared/models/player.model';
import { PLAYERS_DATA } from '../components/top-scorers/top-scorers.definitions';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  PLAYERS_CONTROLLER_URL = "players/";

  constructor() { }

  async addPlayer(data: any) {
    
  }

  getPlayerById(id: string) : any {
    return PLAYERS_DATA.find(player=> player.id === id);
  }
}