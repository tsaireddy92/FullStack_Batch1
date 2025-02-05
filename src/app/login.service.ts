import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginResult } from './ilogin-result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://example.com/api/login';

  constructor(private http: HttpClient) { }

  login(credentials:any): Observable<ILoginResult> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ILoginResult>(this.apiUrl, credentials, { headers });
  }
}
