import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("http://52.54.69.220:3000/api/v1/products/search?var1")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}