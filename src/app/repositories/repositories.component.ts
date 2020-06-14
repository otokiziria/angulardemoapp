import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.sass']
})
export class RepositoriesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  id
  user
  result
  contributors
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.user = params.get('user');
    });
      this.http.get<any>('https://api.github.com/repos/' + this.user + '/' + this.id ).subscribe(data => this.success(data), err => this.failed(err))

  }  

  success(data){
    console.log(data);
    this.result = data;
    if(this.result.contributors_url !== null){
        this.http.get<any>(this.result.contributors_url).subscribe(data => {
          this.contributors = data;
        })
    }
  }
  failed(err){
    console.log(err);
  }
}

  