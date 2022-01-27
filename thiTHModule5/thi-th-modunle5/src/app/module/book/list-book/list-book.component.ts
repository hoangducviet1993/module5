import {Component, OnInit} from '@angular/core';
import {Book} from "../../../model/book";
import {BookService} from "../../../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  listBook: Book[] = []

  constructor(private bookService: BookService,
              private router: Router)
  {
  }

  ngOnInit(): void {
    this.loadAll()
  }
  loadAll() {
    this.bookService.getAll().subscribe(result => {
      console.log(result);
      this.listBook = result;
    }, loi => {
      console.log(loi);
    })
  }
  // @ts-ignore
  deleteBook(id) {
    this.bookService.delete(id).subscribe(result => {
      alert("Xóa Thành Công")
      this.loadAll();
    }, error => {
      console.log(error);
    })
  }
}
