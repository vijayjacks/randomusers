import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL='https://dummyjson.com/users'

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.BASE_URL)
  }

}
