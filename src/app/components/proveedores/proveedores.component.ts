import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedores } from '../../models/proveedores.model';
import { ProveedoresService } from '../../service/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  proveedor: Proveedores[] = [];
<<<<<<< HEAD
  proveedores: Proveedores = {
    idprov: 0,
    direccion: "",
    razons: "",
    ruc: "",


  };


  constructor(private router: Router, private proveedorService: ProveedoresService) {
    this.listar();

  }

=======

  constructor(private router: Router, private proveedorService: ProveedoresService) {
    this.listar();
    
  }

>>>>>>> c35634ec8999a3b7849c836623ce360c8ce2770b

  listar() {
    this.proveedorService.listarProveedor().subscribe(
      response => this.proveedor = response
    );
<<<<<<< HEAD
  }
  registra() {
    this.proveedorService.registra(this.proveedores).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);

        this.proveedorService.listarProveedor().subscribe(
          response => this.proveedor = response
        );

        this.proveedores = {
          idprov: 0,
          direccion: "",
          razons: "",
          ruc: "",
        }
      },
      error => {
        console.log(error);
      },
    );
=======
>>>>>>> c35634ec8999a3b7849c836623ce360c8ce2770b
  }
    
  actualiza() {

    this.proveedorService.actualiza(this.proveedores).subscribe(
      response => {

        console.log(response.mensaje);
        alert(response.mensaje);

<<<<<<< HEAD
        this.proveedorService.actualiza(this.proveedores).subscribe(
          response => this.proveedores = response
        );
        this.proveedores= {
          idprov: 0,
          direccion: "",
          razons: "",
          ruc: "",
        }
      },
      error => {
        console.log(error);
      },
    );
  }
  busca(pr: Proveedores) {
    this.proveedores = pr;
  }


  ngOnInit(): void {
  }
}
=======
  ngOnInit(): void {
  }
}
>>>>>>> c35634ec8999a3b7849c836623ce360c8ce2770b
