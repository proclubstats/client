import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  greet(name: string): string {
    return `Hello, ${name}! Welcome to Angular Service!`;
  }
}