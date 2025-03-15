import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  signIn(body:any) {
    return this.http.post("https://api.everrest.educata.dev/auth/sign_in", body)
  }

  getUser() {
    return this.http.get("https://api.everrest.educata.dev/auth")
  }

  getAllProducts() {
    return this.http.get("https://api.everrest.educata.dev/shop/products/all?page_index=1&page_size=20")
  }

  postToCart(body: any) {
    return this.http.post("https://api.everrest.educata.dev/shop/cart/product", body)
  }
  updateCart(body: any) {
    return this.http.patch("https://api.everrest.educata.dev/shop/cart/product", body)
  }
}
