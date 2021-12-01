import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "../models/pedido.model";

const baseUrl = 'http://localhost:8080/api/pedidos';

@Injectable({
  providedIn: 'root'
})
export class Venta {

    constructor(private http: HttpClient) { }

    listarPedidos(): Observable<Venta[]>{
        return this.http.get<Venta[]>(baseUrl + "/listar");
    }
}
