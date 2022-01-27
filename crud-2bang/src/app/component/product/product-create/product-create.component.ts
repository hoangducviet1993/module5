import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  formProduct = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    categoryId: new FormControl('')
  })
  listCategory: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(result => {
      this.listCategory = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }

  saveProduct() {
    const product = {
      name: this.formProduct.value.name,
      price: this.formProduct.value.price,
      quantity: this.formProduct.value.quantity,
      category: {
        id: this.formProduct.value.categoryId
      }
    }
    console.log(product);
    this.productService.save(product).subscribe(result => {
      alert("Thêm Thành Công");
      this.router.navigate(["listProduct"])
    }, error => {
      console.log(error);
    });
  }
}
