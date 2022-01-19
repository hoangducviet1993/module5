import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  // @ts-ignore
  product: Product;
  formProduct = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    categoryId: new FormControl('')
  })
  listCategory: Category[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.productService.findById(id).subscribe(res => {
        console.log(res)
        this.product = res
      })
    })
    this.categoryService.getAll().subscribe(result => {
      this.listCategory = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }

  updateProduct() {
    const product = {
      name: this.formProduct.value.name,
      price: this.formProduct.value.price,
      quantity: this.formProduct.value.quantity,
      category: {
        id: this.formProduct.value.categoryId
      }
    }
    console.log(product);
    // @ts-ignore
    this.productService.update(this.product.id, product).subscribe(result => {
      alert("Sửa Thành Công");
      this.router.navigate(["listProduct"])
    }, error => {
      console.log(error);
    });
  }

  deleteProduct() {
    // @ts-ignore
    this.productService.delete(this.product.id).subscribe(result=>{
      alert("Xóa Thành Công")
      this.router.navigate(["listProduct"])
    }, error => {
      console.log(error);
    })
  }
}
