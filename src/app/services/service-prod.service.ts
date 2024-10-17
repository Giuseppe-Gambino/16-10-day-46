import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Inter, iProduct } from '../interfaces/inter';

@Injectable({
  providedIn: 'root',
})
export class ServiceProdService {
  apiUrl = 'https://dummyjson.com/products';

  cart$ = new Subject<iProduct>();

  pref: iProduct[] = [];
  pref$ = new Subject<iProduct>();

  constructor(private http: HttpClient) {}

  getProd() {
    return this.http.get<Inter>(this.apiUrl).pipe(map((res) => res.products));
  }

  addToCart(prod: iProduct) {
    this.cart$.next(prod);
  }

  addToFav(prod: iProduct) {
    this.pref$.next(prod);
  }
}
