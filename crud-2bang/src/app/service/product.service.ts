import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

const API_URL = 'http://localhost:8080/api/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL);
  }

  save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(API_URL, product);
  }

  findById(id: String): Observable<Product> {
    return this.httpClient.get<Product>(API_URL + `/${id}`)
  }

  update(id: String, product: Product) {
    return this.httpClient.put<Product>(API_URL + `/${id}`, product)
  }
  delete(id:String){
    return this.httpClient.delete<Product>(API_URL + `/${id}`)
  }
}
