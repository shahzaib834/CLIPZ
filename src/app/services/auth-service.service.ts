import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isAuthenticated: boolean = false;

  authenticateUser() {
    this.isAuthenticated = true;
  }
}
