import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import { catchError, map, tap, startWith, switchMap } from 'rxjs/operators';
// import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }
  getBooks() {
    return this.http.get<any>('./assets/data/books.json', { 'observe': 'response' });
  }
}
