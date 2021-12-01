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
    return this.http.get<Productos[]>(baseUrl + "/listaProductos");

  }
  registra(aux: Productos): Observable<any> {
    return this.http.post<any>(baseUrl + "/registraProductos", aux);
  }


  actualiza(aux: Productos): Observable<any> {
    return this.http.put<any>(baseUrl + "/actualizaProductos", aux);
  }

  eliminar(id: number) {
    const url = `${baseUrl}/${id}`;
    return this.http.delete(url);
  }

}
