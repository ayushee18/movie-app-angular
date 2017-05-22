import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  getMovie(moviename: string) {

  this.router.navigate( [ 'movie', moviename ] );
 	/*navigating to movie path to display movie list*/

 }

}
