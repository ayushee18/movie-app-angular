import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import { MovieListComponent } from './movie-list.component';
import { MovieService } from '../app.service';
import {ActivatedRoute,Params } from '@angular/router';
import 'rxjs/add/observable/of';
import {
  Http,
  Response,
  ResponseOptions,
  BaseRequestOptions,
  ConnectionBackend
} from '@angular/http';
describe('Component: MovieListComponent', () => {
  let fixture;
  let component;
  let movieService;
  let spy;
  let testList;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          
         provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
         
          deps: [MockBackend, BaseRequestOptions]
        },       
        MovieService, {
        provide: ActivatedRoute,
        useValue: {
        params: Observable.of({id: 123})
       }
        },
      ],
      declarations: [MovieListComponent],
       schemas: [ NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.debugElement.componentInstance;
    movieService = fixture.debugElement.injector.get(MovieService);
    let observable: Observable<Response> = Observable.create(observer => {
      let responseOptions = new ResponseOptions({
        body: '[{ "moviename": "titanic" }]'
      });
      observer.next(new Response(responseOptions));
    });
    spy = spyOn(movieService, 'searchMovie')
      .and.returnValue(observable);
  });
  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
