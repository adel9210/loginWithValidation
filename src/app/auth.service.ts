import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string) {
    const userDate = { email, password };
    localStorage.setItem('userData', JSON.stringify(userDate));

    return true;
  }

  logout() {
    localStorage.removeItem('userData');

    return true;
  }

  get isUserAuthorized() {
    return localStorage.getItem('userData')
  }

  get userData() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    return userData
  }
}
