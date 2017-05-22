import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
constructor (private http: Http) {};

searchMovie(movie: string) {
return this.http.get('http://www.omdbapi.com/?s=' + movie).map(response => response.json().Search);
		/*fetching data from server using http.get and then mapping the response*/
}
}
