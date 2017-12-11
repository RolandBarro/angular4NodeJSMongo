import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor( private http: Http) {}

  getUsers() {
    const baseUrl = 'http://localhost:3000';
    this.http.get(`${baseUrl}/user`).subscribe(res => {
    	console.log(res);
    });
  }
}