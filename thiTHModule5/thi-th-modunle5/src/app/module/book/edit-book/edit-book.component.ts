import { Component, OnInit } from '@angular/core';
import {Book} from "../../../model/book";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../../service/book.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  // @ts-ignore
  book: Book;
  formBook = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl('')
  })
  constructor(private activatedRoute: ActivatedRoute,
              private bookService:BookService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param=>{
      const id = param.get('id')
      // @ts-ignore
      this.bookService.findById(id).subscribe(res=>{
        this.formBook = new FormGroup({
          id: new FormControl(res.id),
          title: new FormControl(res.title),
          author: new FormControl(res.author),
          description: new FormControl(res.description)
        });
        console.log(res)
      })
    })
  }
  updateBook() {
    const book = {
      title: this.formBook.value.title,
      author: this.formBook.value.author,
      description: this.formBook.value.description,
    }
    console.log(book);
    // @ts-ignore
    this.bookService.update(this.formBook.value.id, book).subscribe(result => {
      alert("Sửa Thành Công");
      this.router.navigate(["book"])
    }, error => {
      console.log(error);
    });
  }
  deleteBook() {
    // @ts-ignore
    this.bookService.delete(this.formBook.value.id).subscribe(result=>{
      alert("Xóa Thành Công")
      this.router.navigate(["book"])
    }, error => {
      console.log(error);
    })
  }
}
