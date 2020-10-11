import { Component, OnInit } from '@angular/core';
import { Product } from '@app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:Product[];
  constructor() { 
    this.products =[];
    Array(5).
    fill('').
    map((i) => this.products.push(new Product(i, `product 00 ${i+1}`)));

    console.log(this.products);

  }

  ngOnInit() {
  }

}
