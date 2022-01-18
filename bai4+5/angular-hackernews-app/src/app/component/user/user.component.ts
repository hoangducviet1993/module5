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
    password: new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    age: new FormControl('',[Validators.required,Validators.min(16)]),
    gender: new FormControl('',Validators.required),
    phone: new FormControl('',[Validators.required,Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})\\b')]),

  })

  // get user() {
  //   return this.formUser.get('email')
  // }

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewUser() {
    alert("Đăng ký thành công!!!")
    this.lisUser.push(this.formUser.value)
  }
}
