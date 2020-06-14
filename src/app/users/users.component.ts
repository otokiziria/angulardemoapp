import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Component({
  selector: 'app-users',
  moduleId: module.id,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  total = 0;
  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular', {"x-rapidapi-host": "api-football-v1.p.rapidapi.com", "x-rapidapi-key": "SIGN-UP-FOR-KEY"}).subscribe(data => {
    console.log(data);
    this.total = data.total; 

})

  }

}
