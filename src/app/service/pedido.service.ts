import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from '../models/pedido.model';


const baseUrl = 'http://localhost:8080/api/pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
    constructor(private http: HttpClient){}


    listarPedido(): Observable<Pedido[]> {
      return this.http.get<Pedido[]>(baseUrl + "/listarPedido");
    }
  
    registra(aux: Pedido): Observable<any> {
      return this.http.post<any>(baseUrl + "/registraPedido", aux);
    }
  
  
    actualiza(aux: Pedido): Observable<any> {
      return this.http.put<any>(baseUrl + "/actualizaPedido", aux);
  }
  
  eliminar(id: number) {
    const url = `${baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
