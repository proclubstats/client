import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

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

  getTopScorers(id: string): Promise<any> {
    return this.apiService.get(`${this.LEAGUE_CONTROLLER_URL}topScorers`, id);
  }

  getTopAssists(id: string): Promise<any> {
    return this.apiService.get(`${this.LEAGUE_CONTROLLER_URL}topAssists`, id);
  }
}