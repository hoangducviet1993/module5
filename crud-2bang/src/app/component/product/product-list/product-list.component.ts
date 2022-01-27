import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listProduct: Product[] = [];

  constructor(private productService: ProductService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.productService.getAll().subscribe(result => {
      console.log(result);
      this.listProduct = result;
    }, loi => {
      console.log(loi);
    })
  }

  // @ts-ignore
  deleteProduct(id) {
    this.productService.delete(id).subscribe(result => {
      alert("Xóa Thành Công")
      this.loadAll();
    }, error => {
      console.log(error);
    })
  }
}
