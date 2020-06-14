import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  result = [];
  pages = 1;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>('https://api.github.com/users?since=' + this.pages + '&per_page=10', {}).subscribe(data => {
      console.log(data);
      this.result = data;
    })


  }

  increment(){
    this.pages += 1;
    this.http.get<any>('https://api.github.com/users?since=' + this.pages + '&per_page=10', {}).subscribe(data => {
      console.log(data);
      this.result = data;
      if(typeof this.result === "undefined"){
        this.pages -= 1;
      }
    })
  }

  decrement(){
    this.pages -= 1;
    this.http.get<any>('https://api.github.com/users?since=' + this.pages + '&per_page=10', {}).subscribe(data => {
      console.log(data);
      this.result = data;
      if(this.pages < 1){
        this.pages = 1;
      }
    })
  }

  reset(){
    this.pages = 1;
    this.http.get<any>('https://api.github.com/users?since=' + this.pages + '&per_page=10', {}).subscribe(data => {
      console.log(data);
      this.result = data;
    })
  }

}
