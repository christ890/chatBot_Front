import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajador } from '../../models/trabajador.model';
import { TrabajadorService } from '../../service/trabajador.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  trabajador: Trabajador[] = [];
  trabajadores: Trabajador = {
    idtra: 0,
    nombre: "",
    apellido: "",
    direccion: "",
    dni: "",
    telefono: ""

  };


  constructor(private router: Router, private trabajadorService: TrabajadorService) {
    this.listar();
  }
  listar() {
    this.trabajadorService.listarTrabajador().subscribe(
      response => this.trabajador = response
    );
  }
  actualiza() {

    this.trabajadorService.actualiza(this.trabajadores).subscribe(
      response => {

        console.log(response.mensaje);
        alert(response.mensaje);

        this.trabajadorService.actualiza(this.trabajadores).subscribe(
          response => this.trabajadores = response
        );
        this.trabajadores = {
          idtra: 0,
          nombre: "",
          apellido: "",
          direccion: "",
          dni: "",
          telefono: ""
        }
      },
      error => {
        console.log(error);
      },
    );
  }
  busca(c: Trabajador) {
    this.trabajadores = c;
  }

  registra() {
    this.trabajadorService.registra(this.trabajadores).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);

        this.trabajadorService.listarTrabajador().subscribe(
          response => this.trabajador = response
        );

        this.trabajadores = {
          idtra: 0,
          nombre: "",
          apellido: "",
          direccion: "",
          dni: "",
          telefono: ""
        }
      },
      error => {
        console.log(error);
      },
    );
  }
  eliminar(id?: number) {
    this.trabajadorService.eliminar(id!).subscribe(
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
