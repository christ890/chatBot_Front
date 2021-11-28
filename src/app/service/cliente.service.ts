import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const baseUrl='http://localhost:8090/url/rest/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }




  
}
