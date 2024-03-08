import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor() { }

  greet(name: string): string {
    return `Hello, ${name}! Welcome to Angular Service!`;
  }
}