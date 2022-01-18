import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  lisProduct: Product[] = [
    {
      id: '1',
      name: 'Ip11',
      price: '1200'
    },
    {
      id: '2',
      name: 'Ip12',
      price: '1500'
    },
    {
      id: '3',
      name: 'Ip13',
      price: '1800'
    }
  ]
  formProduct = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('',[Validators.required,Validators.email]),
      price: new FormControl(''),
    }
  )
  get user(){
    return this.formProduct.get('name')
  }
  constructor() {
  }

  ngOnInit(): void {
  }

  addNewProduct() {
    this.lisProduct.push(this.formProduct.value);
  }
}
