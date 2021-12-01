import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente: Cliente = {
    idcli: 0,
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: ""

  };

  constructor(private router: Router, private clienteService: ClienteService) {
    this.listar();
  }


  listar() {
    this.clienteService.listarCliente().subscribe(
      response => this.clientes = response
    );
  }

  ngOnInit(): void {
  }


  registra() {
    this.clienteService.registra(this.cliente).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);

        this.clienteService.listarCliente().subscribe(
          response => this.clientes = response
        );

        this.cliente = {
          idcli: 0,
          nombre: "",
          apellido: "",
          direccion: "",
          telefono: "",
        }
      },
      error => {
        console.log(error);
      },
    );
  }
  
  actualiza() {

    this.clienteService.actualiza(this.cliente).subscribe(
      response => {

        console.log(response.mensaje);
        alert(response.mensaje);

        this.clienteService.actualiza(this.cliente).subscribe(
          response => this.clientes = response
        );
        this.cliente = {
          idcli: 0,
          nombre: "",
          apellido: "",
          direccion: "",
          telefono: ""
        }
      },
      error => {
        console.log(error);
      },
    );
  }

  busca(c: Cliente) {
    this.cliente = c;
  }
  eliminar(id?: number) {
    this.clienteService.eliminar(id!).subscribe(
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


};

