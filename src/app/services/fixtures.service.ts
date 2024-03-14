import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  FIXTURES_CONTROLLER_URL = "fixtures/";

  constructor() { }

  greet(name: string): string {
    return `Hello, ${name}! Welcome to Angular Service!`;
  }
}