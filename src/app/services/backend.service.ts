import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductJson }  from '../models/product';
import { Observable, map } from 'rxjs';

@Injectable()
export class BackendService {

  apiUrl: string = 'assets/products.json'
  constructor(private httpclient: HttpClient) {
  }

  public getAll() : Observable<ProductJson[]>
  {
    return this.httpclient.get<ProductJson[]>(this.apiUrl).pipe(
      map(response => response)
    );
  }
}