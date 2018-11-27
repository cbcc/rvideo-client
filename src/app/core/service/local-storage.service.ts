import { Injectable } from '@angular/core';
import {User} from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  static setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  static getToken(): string {
    return localStorage.getItem('token');
  }
  static removeToken(): void {
    localStorage.removeItem('token');
  }
  static getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }
  static setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    console.log('had setUser: ' + this.getUser());
  }
  static removeUser(): void {
    localStorage.removeItem('user');
  }
}
