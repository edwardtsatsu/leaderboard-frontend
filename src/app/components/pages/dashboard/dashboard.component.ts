import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/HttpClient/http-client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:any
  username:String=""
  constructor(
    private http : HttpClientService
  ) { }

  ngOnInit(): void {
    this.getLeaderBoard()
  }
 
  addUser(){

  }
  getLeaderBoard(){
    this.http.getLeaderboard().subscribe((data)=>{
      this.data = data
      console.log(this.data)
    })
  }

}
