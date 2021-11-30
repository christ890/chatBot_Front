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

  listarProveedor(): Observable<Proveedores[]> {
    return this.http.get<Proveedores[]>(baseUrl + "/listarProveedores");
  }
}