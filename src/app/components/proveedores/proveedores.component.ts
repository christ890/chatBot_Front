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

  proveedores: Proveedores = {
    idprov: 0,
    direccion: "",
    razons: "",
    ruc: "",


  };



  constructor(private router: Router, private proveedorService: ProveedoresService) {
    this.listar();
    
  }

  listar() {
    this.proveedorService.listarProveedor().subscribe(
      response => this.proveedor = response
    );

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

  }
    
  actualiza() {

    this.proveedorService.actualiza(this.proveedores).subscribe(
      response => {

        console.log(response.mensaje);
        alert(response.mensaje);


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
  eliminar(id?: number) {
    this.proveedorService.eliminar(id!).subscribe(
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


