import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserToken } from '../data/userToken';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  jwtHelperService = new JwtHelperService();

  constructor() {
  }

  getTokenId(token: string): number {
    return this.parseToken(token).id;
  }

  getTokenRoles(token: string):  Array<string> {
    return this.parseToken(token).roles;
  }

  parseToken(token: string): UserToken {
    return this.jwtHelperService.decodeToken(token);
  }
}
