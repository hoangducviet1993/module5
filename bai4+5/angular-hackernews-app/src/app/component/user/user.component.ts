import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  lisUser: User[] = [];
  formUser = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl(''),
    country: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    phone: new FormControl(''),

  })

  get error() {
    return this.formUser.get('email')
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewUser() {
    this.lisUser.push(this.formUser.value)
  }
}
