import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../models/productos.model';


const baseUrl = 'http://localhost:8080/api/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  listarProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(baseUrl + "/listarProductos");

}

}
