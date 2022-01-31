import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getToken() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  onRegister(userDetails) {
    return this.http.post<any>(`${environment.baseURL}/api/users/register`, userDetails)
  }

  onLogin(credentials) {
    return this.http.post<any>(`${environment.baseURL}/api/users/login`, credentials)
  }

  getUserDetails() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {
      return userDetails;
    }
  }
}

