import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-lis',
  templateUrl: './product-lis.component.html',
  styleUrls: ['./product-lis.component.css']
})
export class ProductLisComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.products = this.productService.getAll();
  }
}
