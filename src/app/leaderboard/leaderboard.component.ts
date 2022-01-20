import { LeaderboardService } from './../services/leaderboard.service';
import { LeaderboardModel } from './../models/leaderboard.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  honour_data:any
  username:String=""
  users_data: any
  overall_rank_data:any
  honour:any
  selector:any
  all_users:any
  overallRank:any
  language_data: any;
  language: any;
  constructor(
    private leaderboardService : LeaderboardService
  ) { }

  ngOnInit(): void {
    this.getLeaderBoardByHonour()
    this.getLeaderBoardAllUsers()
    this.getLeaderBoardByOverallRank()
  }
 
  addUser(){
    const payload = {
      "id" : this.username
    }
    this.leaderboardService.addUser(payload).subscribe(
      error => {
        console.log(error)
      },
      success => {
        console.log(success)
      }
    )
    this.getLeaderBoardByHonour()
  }
  getLeaderBoardByHonour(){
    this.leaderboardService.getLeaderboardByHonour().subscribe((data)=>{
      this.honour_data = data
      console.log(this.honour_data)
    })
  }

  getLeaderBoardAllUsers(){
    this.leaderboardService.getLeaderboardAllUsers().subscribe((data)=>{
      this.users_data = data
      console.log(this.users_data)
    })
  }

  getLeaderBoardByOverallRank(){
    this.leaderboardService.getLeaderboardByOverallRank().subscribe((data)=>{
      this.overall_rank_data = data
      console.log(this.overall_rank_data)
    })
  }
  
  getLeaderBoardByLanguage(language:any){
    this.language = language
    // var selected_language = this.selectLanguage(language)
    // console.log(selected_language)
    this.leaderboardService.getLeaderBoardByLanguage(this.language).subscribe((data)=>{
      this.language_data = data
      console.log(this.language_data)
    })
  }
  
  userSelect(selector:any){
    this.selector = selector
  }

  selectLanguage(language:any){
    this.language = language
  }

}
