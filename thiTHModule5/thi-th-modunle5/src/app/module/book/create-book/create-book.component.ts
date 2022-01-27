import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  formBook = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private bookService:BookService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }
  saveHome() {
    const book = {
      title: this.formBook.value.title,
      author: this.formBook.value.author,
      description: this.formBook.value.description,
    }
    console.log(book);
    this.bookService.save(book).subscribe(result => {
      alert("Thêm Thành Công");
      this.router.navigate(["book"])
    }, error => {
      console.log(error);
    });
  }
}
