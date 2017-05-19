import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { SearchComponent } from '../search/search.component';
import { MovieService } from '../app.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

private result;

  constructor(private router: Router, private route: ActivatedRoute, private movieservice: MovieService) { }

  ngOnInit(): void { 
  	this.route.params
  	.switchMap((params: Params) => this.movieservice.searchMovie(params['moviename']))
  	.subscribe((data) => {this.result = data; console.log(this.result);});
  	/*using switch map to fetch params by using moviename parameter from search bar*/
  }

}
