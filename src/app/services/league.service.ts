import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ILeague } from '../shared/models/league-table.model';
import { LeagueTableRow } from '../shared/models/leagueTableTeam';
import { IPlayer } from '../shared/models/player.model';
import { TopScorer } from '../shared/models/topscorer.model';
import { TopAssister } from '../shared/models/topassister.model';
import { AddFixtureDataRequest } from '../shared/models/addFixtureDataRequest';
import { FixtureDTO, PaginatedFixtureDTO } from '../shared/models/game.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  LEAGUE_CONTROLLER_URL = "league/";

  constructor(private apiService: ApiService) { }

  async addLeague(name: string): Promise<ILeague> {
    const response = await this.apiService.post<ILeague>(`${this.LEAGUE_CONTROLLER_URL}`, name);

    return response.data;
  }

  async getLeagueById(id: string): Promise<ILeague> {
    const response = await this.apiService.get<ILeague>(`${this.LEAGUE_CONTROLLER_URL}`, id);

    return response.data;
  }

  async getLeagueTable(id: string): Promise<LeagueTableRow[]> {
    const response = await this.apiService.get<LeagueTableRow[]>(`${this.LEAGUE_CONTROLLER_URL}${id}/table`);

    return response.data;
  }

  async getAllLeagues(): Promise<ILeague[]> {
    const response = await this.apiService.get<ILeague[]>(`${this.LEAGUE_CONTROLLER_URL}`);

    return response.data;
  }

  async removeLeague(id: string): Promise<ILeague> {
    const response = await this.apiService.delete<ILeague>(`${this.LEAGUE_CONTROLLER_URL}`, id);

    return response.data;
  }

  async getTopScorers(leagueId: string): Promise<TopScorer[]> {
    const response = await this.apiService.get<TopScorer[]>(`${this.LEAGUE_CONTROLLER_URL}${leagueId}/topScorers`);

    return response.data;
  }

  async getTopAssists(leagueId: string): Promise<TopAssister[]> {
    const response = await this.apiService.get<TopAssister[]>(`${this.LEAGUE_CONTROLLER_URL}${leagueId}/topAssists`);

    return response.data;
  }

  async getLeagueFixtures(leagueId: string,): Promise<FixtureDTO[]> {
    const response = await this.apiService.get<FixtureDTO[]>(`${this.LEAGUE_CONTROLLER_URL}league/round${leagueId}/fixtures`);

    return response.data;
  }

  async getPaginatedLeagueFixturesGames(leagueId: string, page: number , pageSize: number): Promise<PaginatedFixtureDTO> {
    const response = await this.apiService.get<PaginatedFixtureDTO>(`fixture/${this.LEAGUE_CONTROLLER_URL}${leagueId}/paginatedGames?page=${page}&pageSize=${pageSize}`);

    return response.data;
  }

  async createFixture(leagueId: string, createFixtureRequest: AddFixtureDataRequest): Promise<FixtureDTO> {
    const response = await this.apiService.post<FixtureDTO>(`${this.LEAGUE_CONTROLLER_URL}${leagueId}/createFixture`, createFixtureRequest);

    return response.data;
  }
}