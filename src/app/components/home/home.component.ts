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

  ngOnInit(): void {
    this.Prods.getProd().subscribe((res) => {
      this.allProduct = res.products;
      console.log(this.allProduct);
    });
  }
}
