import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  TEAMS_CONTROLLER_URL = "team/";

  constructor(private apiService: ApiService) { }

  createTeam(name: string, leagueId: string, logoUrl: string): Promise<any> {
    return this.apiService.post(`${this.TEAMS_CONTROLLER_URL}`, {name:name, leagueId:leagueId, logoUrl: logoUrl});
  }

  deleteTeam(id: string): Promise<any> {
    return this.apiService.delete(`${this.TEAMS_CONTROLLER_URL}`, id);
  }

  getTeamById(id: string): Promise<any> {
    return this.apiService.get(`${this.TEAMS_CONTROLLER_URL}`, id);
  }

  getAllTeams(): Promise<any> {
    return this.apiService.get(`${this.TEAMS_CONTROLLER_URL}`);
  }
}