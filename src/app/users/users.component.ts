import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  result = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>('https://api.github.com/users?since=135').subscribe(data => {
      console.log(data);
      this.result = data;
    })

  }

}
