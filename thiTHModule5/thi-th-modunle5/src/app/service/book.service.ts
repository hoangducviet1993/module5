import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";

const API_URL = "http://localhost:3000/books"

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(API_URL);
  }

  save(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(API_URL, book);
  }
  findById(id: String): Observable<Book> {
    return this.httpClient.get<Book>(API_URL + `/${id}`)
  }
  update(id: String, book: Book) {
    return this.httpClient.put<Book>(API_URL + `/${id}`, book)
  }
  delete(id:String){
    return this.httpClient.delete<Book>(API_URL + `/${id}`)
  }
}
