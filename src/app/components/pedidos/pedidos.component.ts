import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../../models/pedido.model';
import { PedidoService } from '../../service/pedido.service';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[] = [];
  pedido: Pedido = {
    idped: 0,
    descripcion: "",
    fecpedido: "",
    fecEntrega: "",
  

  };

  constructor(private router: Router, private pedidoService: PedidoService) {
    this.listar();
  }
  
  listar() {
    this.pedidoService.listarPedido().subscribe(
      response => this.pedidos = response
    );
  }
  registra() {
    this.pedidoService.registra(this.pedido).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);

        this.pedidoService.listarPedido().subscribe(
          response => this.pedidos = response
        );

        this.pedido = {
          idped: 0,
          descripcion: "",
          fecpedido:"",
          fecEntrega: "",
        }
      },
      error => {
        console.log(error);
      },
    );
  }
  actualiza() {

    this.pedidoService.actualiza(this.pedido).subscribe(
      response => {

        console.log(response.mensaje);
        alert(response.mensaje);

        this.pedidoService.actualiza(this.pedido).subscribe(
          response => this.pedidos = response
        );
        this.pedido = {
          idped: 0,
          descripcion: "",
          fecpedido: "",
          fecEntrega: "",
        }
      },
      error => {
        console.log(error);
      },
    );
  }

  busca(c: Pedido) {
    this.pedido = c;
  }
  eliminar(id?: number) {
    this.pedidoService.eliminar(id!).subscribe(
      resp => {
        this.listar();
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('complete!');
      }
    )
  }
  ngOnInit(): void {
  }

}
