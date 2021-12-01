import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

const baseUrl = 'http://localhost:8080/api/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  listarCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(baseUrl + "/listarCategoria");
  }
  
  registrarCategorias(aux: Categoria): Observable<any> {
    return this.http.post<any>(baseUrl + "/registraCategoria", aux);
  }

  eliminar(id: number) {
    const url = `${baseUrl}/${id}`;
    return this.http.delete(url);
  }


  

  
 }
