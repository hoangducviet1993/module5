import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
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
