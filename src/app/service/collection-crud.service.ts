import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Collection {
  id?:number;
  name:string;

}

@Injectable({
  providedIn: 'root'
})
export class CollectionCrudService {

  endpoint = 'http://localhost:8000/api/collections';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  //http://localhost:8000/api/categories/{id}/collections
  getCollections(): Observable<Collection[]>{
    return this.httpClient.get<Collection[]>(this.endpoint)
    .pipe(
      tap(collection=> console.log('Collections Retrivies!')),
      catchError(this.handleError<Collection[]>('Get Collentions', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
