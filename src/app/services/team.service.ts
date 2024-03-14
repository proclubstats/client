import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  TEAMS_CONTROLLER_URL = "team/";

  constructor() { }

  greet(name: string): string {
    return `Hello, ${name}! Welcome to Angular Service!`;
  }
}