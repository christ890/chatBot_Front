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
  ClienteService: any;

  constructor(private router: Router) { }



  
  Clientes: Cliente = {
    idcli: 0,
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",

    }
    registraCliente(){
      console.log(this.clientes);
  
      this.ClienteService.registraCliente(this.clientes).subscribe(
        (        response: { mensaje: any; }) => {
          console.log(response.mensaje);
          alert(response.mensaje);
        },
        (        error: any) => {
          console.log(error);
        }
      );
  
    }
    
  ngOnInit(): void {
  }
  };
 
