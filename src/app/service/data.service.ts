import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
   // return this.httpClient.get('http://nicsystem.test/index');
  }

  insertData(data){

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post('http://nicsystem.test/create', data, { 'headers': headers });
  }

  loginUser(data){

    const headers= new HttpHeaders()
    //.set('content-type', 'application/json')
    //.set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post('http://nicsystem.test/login', data, { 'headers': headers });
  }

  getUser(){

    const headers= new HttpHeaders()
    //.set('content-type', 'application/json')
    //.set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get('http://nicsystem.test/getuser', { 'headers': headers });
  }

  
}
