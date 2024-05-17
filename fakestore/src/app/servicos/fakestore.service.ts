import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {

  constructor(private http: HttpClient) { }

  linkApi = "https://fakestoreapi.com/products"

  getAllProducts(){
    return this.http.get(this.linkApi)
  }

}
