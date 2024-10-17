import { Component, OnInit } from '@angular/core';
import { ServiceProdService } from '../../services/service-prod.service';
import { iProduct } from '../../interfaces/inter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private Prods: ServiceProdService) {}

  allProduct: iProduct[] = [];
  cart: iProduct[] = [];

  ngOnInit(): void {
    this.Prods.getProd().subscribe((products) => {
      this.allProduct = products;
    });
    // cart
    this.Prods.cart$.subscribe((prod) => {
      this.cart.push(prod);
    });
  }

  addToCart(prod: iProduct) {
    this.Prods.addToCart(prod);
  }

  addToFav(prod: iProduct) {
    this.Prods.addToFav(prod);
  }
}
