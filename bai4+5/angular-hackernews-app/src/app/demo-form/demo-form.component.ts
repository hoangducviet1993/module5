import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {
  formDemo = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    address: new FormControl(),
    }
  )

  constructor() { }

  ngOnInit(): void {
  }
 create(){
    console.log(this.formDemo.value)
 }

}
