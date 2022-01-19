import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor() { }

  getLeaderboard(){
    return [
      {name: "mensah", honour: 2001, language: "java", rank: 1},
      {name: "john", honour: 2001, language: "java", rank: 2},
      {name: "fada", honour: 200, language: "java", rank: 5},
      {name: "joseph", honour: 30, language: "java", rank: 8},
      {name: "arthur", honour: 451, language: "java", rank: 3},
      {name: "abena", honour: 52, language: "java", rank: 4},
      {name: "kay", honour: 75, language: "java", rank: 7},
      {name: "mens", honour: 696, language: "java", rank: 6}
    ]
  }
}
