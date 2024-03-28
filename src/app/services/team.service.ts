import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CreateTeamModel, ITeam } from '../shared/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  TEAMS_CONTROLLER_URL = "team";

  constructor(private apiService: ApiService) { }

  async createTeam(createTeamModel: CreateTeamModel): Promise<ITeam> {
    const response = await this.apiService.post<ITeam>(`${this.TEAMS_CONTROLLER_URL}`, { name: createTeamModel.name, leagueId: createTeamModel.leagueId, logoUrl: createTeamModel.logoUrl });

    return response.data;
  }

  async deleteTeam(id: string): Promise<void> {
    await this.apiService.delete(`${this.TEAMS_CONTROLLER_URL}/${id}`);
  }

  async getTeamById(id: string): Promise<ITeam> {
    const response = await this.apiService.get<ITeam>(`${this.TEAMS_CONTROLLER_URL}/${id}/`);

    return response.data;
  }

  async getAllTeams(): Promise<ITeam[]> {
    const response = await this.apiService.get<ITeam[]>(`${this.TEAMS_CONTROLLER_URL}`);

    return response.data;
  }

  async getPlayersByTeam(id: string): Promise<any> {
    // var players = PLAYERS_DATA.filter(player=> {return player.teamID === id});

    return new Promise((resolve) => {
      resolve([]);
    });
  }
}