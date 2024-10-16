import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inter, iProduct } from '../interfaces/inter';

@Injectable({
  providedIn: 'root',
})
export class ServiceProdService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProd(): Observable<Inter> {
    return this.http.get<Inter>(this.apiUrl);
  }
}
