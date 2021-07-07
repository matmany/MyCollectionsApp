import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Item {
    id: number;
    name: string;
    url_img: string;
    description: string;
    notes: string;
    amount: number
    review: string;
    position: number;
    options: JSON;
}

@Injectable({
  providedIn: 'root'
})
export class ItemCrudService {
  //http://localhost:8000/api/collections/1/itens
  endpoint = 'http://localhost:8000/api/collections';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }

  getItens(id): Observable<Item[]>{
    console.log("Request:"+id);
    return this.httpClient.get<Item[]>(this.endpoint+'/'+id+'/itens')
    .pipe(
      tap(items=> console.log('Itens Retrivies!')),
      catchError(this.handleError<Item[]>('Get Itens', []))
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
