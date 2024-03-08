import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor() { }

  greet(name: string): string {
    return `Hello, ${name}! Welcome to Angular Service!`;
  }
}