import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  id
  result
  repos
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
      this.http.get<any>('https://api.github.com/users/' + this.id).subscribe(data => this.success(data), err => this.failed(err))

  }

  success(data){
    console.log(data);
    this.result = data;

    if (this.result.repos_url !== null) {
      console.log("oto", this.result.repos_url)
      this.http.get<any>(this.result.repos_url).subscribe(data => {
        console.log(data, "repos");
        this.repos = data;
      })
    }
  }
  failed(err){
    console.log(err);
  }
}
