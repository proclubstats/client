import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CreateTeamModel, ITeam, TeamDTO } from '../shared/models/team.model';
import { IPlayer, PlayerDTO } from '../shared/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  TEAMS_CONTROLLER_URL = "team";

  constructor(private apiService: ApiService) { }

  async createTeam(createTeamModel: CreateTeamModel): Promise<TeamDTO> {
    const response = await this.apiService.post<TeamDTO>(`${this.TEAMS_CONTROLLER_URL}`, { name: createTeamModel.name, leagueId: createTeamModel.leagueId, logoUrl: createTeamModel.logoUrl });

    return response.data;
  }

  async deleteTeam(id: string): Promise<void> {
    await this.apiService.delete(`${this.TEAMS_CONTROLLER_URL}/${id}`);
  }

  async getTeamById(id: string): Promise<TeamDTO> {
    const response = await this.apiService.get<TeamDTO>(`${this.TEAMS_CONTROLLER_URL}/${id}/`);

    return response.data;
  }

  async getAllTeams(): Promise<TeamDTO[]> {
    const response = await this.apiService.get<TeamDTO[]>(`${this.TEAMS_CONTROLLER_URL}/`);

    return response.data;
  }

  async getPlayersByTeam(id: string): Promise<PlayerDTO[]> {
    const response = await this.apiService.get<PlayerDTO[]>(`${this.TEAMS_CONTROLLER_URL}/${id}/players/`);

    return response.data;
  }

  async setTeamCaptain(teamId: string, playerId: string) {
    await this.apiService.patch<void>(`${this.TEAMS_CONTROLLER_URL}/${teamId}/setCaptain/`, { captainId: playerId });
  }

  async setTeamImage(teamPhoto: FormData, teamId: string): Promise<string> {
    const response = await this.apiService.patch<string>(`${this.TEAMS_CONTROLLER_URL}/${teamId}/setImage/`, teamPhoto);

    return response.data;
  }

  async addPlayerToTeam(teamId: string, playerId: string): Promise<void> {
    await this.apiService.put<void>(`${this.TEAMS_CONTROLLER_URL}/${teamId}/addPlayer/`, { playerId: playerId });
  }
}