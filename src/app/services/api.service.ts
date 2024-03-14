import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SERVER_URL = "localhost:3000/";

  constructor() { }

  greet(name: string): string {
    return `Hello, ${name}! Welcome to Angular Service!`;
  }
}