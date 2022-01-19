import { LeaderboardService } from './../services/leaderboard.service';
import { LeaderboardModel } from './../models/leaderboard.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  leaderboard: Array<LeaderboardModel> = []
  constructor(private service:LeaderboardService) { }
  ngOnInit(): void {
    this.rankedLeaderboard()
     console.log(this.leaderboard);
  }

  rankedLeaderboard(asc = false){
      this.leaderboard = this.service.getLeaderboard().sort((a, b) => {
        if (a.honour === b.honour) {
          // Rank is only important when Honours are the same
          return a.rank > b.rank ? 1 : -1;
       }
        return a.honour > b.honour ? -1 : 1
      });
  }

}
