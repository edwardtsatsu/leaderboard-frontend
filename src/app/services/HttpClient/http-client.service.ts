import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
 url:any = 'http://localhost:8080/v1/leaderboard'
  constructor(
    private http : HttpClient
  ) { }

  getLeaderboard(){
    return this.http.get(this.url);
  }
}
