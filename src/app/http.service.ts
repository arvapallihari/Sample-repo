import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  // myMethod() {
  //   return console.log('haiiiiiiiiiiiiiiii'); 
  // }
  getList(){
   // return console.log('helloooooooooo');
   return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}
