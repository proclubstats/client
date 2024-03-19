import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PLAYERS_DATA } from '../components/top-scorers/top-scorers.definitions';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  LEAGUE_CONTROLLER_URL = "league/";

  constructor(private apiService: ApiService) { }

  addLeague(name: string): Promise<any> {
    return this.apiService.post(`${this.LEAGUE_CONTROLLER_URL}`, name);
  }

  getLeagueById(id: string): Promise<any> {
    return this.apiService.get(`${this.LEAGUE_CONTROLLER_URL}`, id);
  }

  getAllLeagues(): Promise<any> {
    return this.apiService.get(`${this.LEAGUE_CONTROLLER_URL}`);
  }

  removeLeague(id: string): Promise<any> {
    return this.apiService.delete(`${this.LEAGUE_CONTROLLER_URL}`, id);
  }

  getTopScorers(id?: string): Promise<any> {
    var topscorers = PLAYERS_DATA;
    topscorers.map(player => player.gpg = (player.goalsAmount / player.gamesAmount).toFixed(2));
    return new Promise((resolve) => {
      resolve(topscorers);
    });
    //return this.apiService.get(`${this.LEAGUE_CONTROLLER_URL}topScorers`, id);
  }

  getTopAssists(id?: string): Promise<any> {
    var topAssists = PLAYERS_DATA;
    topAssists.map(player => player.apg = (player.assistsAmount / player.gamesAmount).toFixed(2));
    return new Promise((resolve) => {
      resolve(topAssists);
    });
   // return this.apiService.get(`${this.LEAGUE_CONTROLLER_URL}topAssists`, id);
  }
}