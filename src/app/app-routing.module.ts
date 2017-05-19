import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
	{ path: '', redirectTo: 'movie/batman', pathMatch: 'full'},
	{ path: 'movie/:moviename' , component: MovieListComponent },
	/*creating paths*/
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }