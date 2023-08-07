import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  electronics(){
    return this.http.get<any>("https://fakestoreapi.com/products/category/electronics")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  fashion(){
    return this.http.get<any>("https://fakestoreapi.com/products/category/men's clothing")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  jewllery(){
    return this.http.get<any>("https://fakestoreapi.com/products/category/jewelery")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
