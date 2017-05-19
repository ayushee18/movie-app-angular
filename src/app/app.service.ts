import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService{
	
	constructor(private http:Http) {};

	searchMovie(moviename: string){
		return this.http.get('http://www.omdbapi.com/?s='+moviename).map(response => response.json().Search);
	}

}