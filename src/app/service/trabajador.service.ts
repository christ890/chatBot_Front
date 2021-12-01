import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajador } from '../models/trabajador.model';


const baseUrl = 'http://localhost:8080/api/trabajadores';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  constructor(private http: HttpClient) { }

  listarTrabajador(): Observable<Trabajador[]> {
    return this.http.get<Trabajador[]>(baseUrl + "/listaTrabajador");
  }
  
  registra(aux: Trabajador): Observable<any> {
    return this.http.post<any>(baseUrl + "/registraTrabajador", aux);
  }
  
  actualiza(aux: Trabajador): Observable<any> {
    return this.http.put<any>(baseUrl + "/actualizaTrabajador", aux);

}
eliminar(id: number) {
  const url = `${baseUrl}/${id}`;
  return this.http.delete(url);
}




}
