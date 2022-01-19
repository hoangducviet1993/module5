import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {

  }

}
