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
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    console.log(this.id)
    if (this.id !== null || typeof this.id !== "undefined") {
      this.http.get<any>('https://api.github.com/users/' + this.id).subscribe(data => {
        console.log(data);
        this.result = data;
      })
    }
  }

}
