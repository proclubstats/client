import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  FIXTURES_CONTROLLER_URL = "fixture";

  constructor(private apiService: ApiService) { }

}