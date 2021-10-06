import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://raw.githubusercontent.com/amrutavhatkar/UI/main/pizaadata.json?token=AOKALX7EPH6PE6LEJRJPRO3BLV5AC")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
