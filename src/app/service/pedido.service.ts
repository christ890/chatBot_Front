import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../models/cliente.model";
import { Productos } from "../models/productos.model";

const baseUrl = 'http://localhost:8080/api/pedidos';

@Injectable({
  providedIn: 'root'
})
export class Pedido {
    constructor(private http: HttpClient){}

    listarPedidos():Observable<Pedido[]>{
        return this.http.get<Pedido[]>(baseUrl + "/listar");
    }
        
    
}
