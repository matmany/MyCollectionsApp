import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Category {
  id?:number;
  name: string;
  user_id: number;
  // active: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CategoryCrudService {

  endpoint = 'http://localhost:8000/api/categories';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }
  
  createCategory(category:Category): Observable<any>{
    return this.httpClient.post<Category>(
      this.endpoint, 
      JSON.stringify(category), 
      this.httpOptions
    )
    .pipe(
      catchError(this.handleError<Category>('Erro Aconteceu'))
    );
  }

  getCategory(id): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`User fetched: ${id}`)),
        catchError(this.handleError<Category[]>(`Get user id=${id}`))
      );
  }

  getCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.endpoint)
    .pipe(
      tap(category => console.log('Category Retrivied!')),
      catchError(this.handleError<Category[]>('Get cate', []))
    )
  }

  updateUser(id, category: Category): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(category), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Category updated: ${id}`)),
        catchError(this.handleError<Category[]>('Update Category'))
      );
  }

  deleteUser(id): Observable<Category[]> {
    return this.httpClient.delete<Category[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Category deleted: ${id}`)),
        catchError(this.handleError<Category[]>('Delete Category'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  

}
