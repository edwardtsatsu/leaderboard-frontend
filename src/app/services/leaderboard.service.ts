import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(
    private http : HttpClient
  ) { }

  getLeaderboardByHonour(){
   return this.http.get('http://localhost:8082/v1/leaderboard/honour')
  }

  getLeaderboardAllUsers(){
    return this.http.get('http://localhost:8082/v1/leaderboard/users')
   }

   getLeaderboardByOverallRank(){
    return this.http.get('http://localhost:8082/v1/leaderboard/overallRank')
   }
   
   getLeaderBoardByLanguage(language:any){
     return this.http.get('http://localhost:8082/v1/leaderboard/language/'+language)

   }

  addUser(payload:any){
   return this.http.post('http://localhost:8082/v1/leaderboard',payload)
  }
}
