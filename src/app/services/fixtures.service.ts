import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  FIXTURES_CONTROLLER_URL = "fixture/";

  constructor(private apiService: ApiService) { }

  addFixtureToLeague(leagueId: string, fixtureData: any) : Promise<any>{
    return this.apiService.post(`${this.FIXTURES_CONTROLLER_URL}`, {leagueId:leagueId, fixtureData: fixtureData});
  }

  deleteFixture(id: string): Promise<any> {
     return this.apiService.delete(`${this.FIXTURES_CONTROLLER_URL}`, id);
  }

  getFixtureById(id: string): Promise<any> {
    return this.apiService.get(`${this.FIXTURES_CONTROLLER_URL}`, id);
  }

  getAllFixtures(): Promise<any> {
    return this.apiService.get(`${this.FIXTURES_CONTROLLER_URL}`);
  }
}