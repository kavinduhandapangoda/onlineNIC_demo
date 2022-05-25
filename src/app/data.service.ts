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

   getDataLevel2(){
    return this.httpClient.get('http://nicsystem.test/stage2index');
  }

  getDataLevel3(){
    return this.httpClient.get('http://nicsystem.test/stage3index');
  }

  getPoliceReport(data){
    return this.httpClient.get('http://nicsystem.test/getPoliceReport/'+data);
  }

  getPeaceReport(data){
    return this.httpClient.get('http://nicsystem.test/getPeaceReport/'+data);
  }

  getPhoto(data){
    return this.httpClient.get('http://nicsystem.test/getPhoto/'+data);
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
    return this.httpClient.post('http://nicsystem.test/edit', data, { 'headers': headers });
  }

  updateRequestError(data){
    const headers= new HttpHeaders()
    return this.httpClient.post('http://nicsystem.test/markError', data, { 'headers': headers });
  }

  updateRequestl2(data){
    const headers= new HttpHeaders()
    return this.httpClient.post('http://nicsystem.test/editl2', data, { 'headers': headers });
  }

  updateRequestl3(data){
    const headers= new HttpHeaders()
    return this.httpClient.post('http://nicsystem.test/editl3', data, { 'headers': headers });
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
