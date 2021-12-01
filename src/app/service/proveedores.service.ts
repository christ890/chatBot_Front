import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedores } from '../models/proveedores.model';

const baseUrl = 'http://localhost:8080/api/proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  constructor(private http: HttpClient) { }
<<<<<<< HEAD

  listarProveedor(): Observable<Proveedores[]> {
    return this.http.get<Proveedores[]>(baseUrl + "/listarProveedores");
  }

  registra(aux: Proveedores): Observable<any> {
    return this.http.post<any>(baseUrl + "/registraProveedor", aux);
  }

  actualiza(aux: Proveedores): Observable<any> {
    return this.http.put<any>(baseUrl + "{idprov}", aux);

  }
  busca(pr : Proveedores){
    return this.busca;}
=======

  listarProveedor(): Observable<Proveedores[]> {
    return this.http.get<Proveedores[]>(baseUrl + "/listarProveedores");
  }
>>>>>>> c35634ec8999a3b7849c836623ce360c8ce2770b
}