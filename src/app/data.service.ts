import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers = new HttpHeaders();
  constructor(private httpClient:HttpClient) { }

  getData(){
     return this.httpClient.get('http://nicsystem.test/index');
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

   updateRequest(data){
 
    const headers= new HttpHeaders()
    //.set('content-type', 'application/json')
    //.set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post('http://nicsystem.test/edit', data, { 'headers': headers });
  }

  updateRequestError(data){
 
    const headers= new HttpHeaders()
    //.set('content-type', 'application/json')
    //.set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post('http://nicsystem.test/markError', data, { 'headers': headers });
  }

   getUser(){
 
    const headers= new HttpHeaders()
    return this.httpClient.get('http://nicsystem.test/getuser', { 'headers': headers });
  }

  uploadImage(data){
    const headersData = new HttpHeaders({'Content-Type':'multipart/form-data; charset=utf-8'});
    console.log(headersData);
    return this.httpClient.post('http://nicsystem.test/upload',data, {headers: headersData});
  }

  generatebarCode(data){
    const headers= new HttpHeaders()
    return this.httpClient.get('http://nicsystem.test/generatebarcode/'+data, { 'headers': headers });
  }

}
