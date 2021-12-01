import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Categoria } from '../../models/categoria.model';
import { CategoriaService } from '../../service/categoria.service';
=======
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
>>>>>>> c35634ec8999a3b7849c836623ce360c8ce2770b

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[] = [];
  categoria: Categoria = {
    idcat: 0,
    descripcion: "",

  };


  constructor(private router: Router, private categoriaService: CategoriaService) {
    this.listar();
  }

  listar() {
    this.categoriaService.listarCategoria().subscribe(
      response => this.categorias = response
    );
  }
  registrarCategorias() {
    this.categoriaService.registrarCategorias(this.categoria).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);

        this.categoriaService.listarCategoria().subscribe(
          response => this.categorias = response
        );

        this.categoria = {
          idcat: 0,
          descripcion: "",

        }
      },
      error => {
        console.log(error);
      },
    );
  }

<<<<<<< HEAD
=======
  categorias:any = [];
  cargar:boolean = false;

  constructor(private router: Router) { }
>>>>>>> c35634ec8999a3b7849c836623ce360c8ce2770b

  ngOnInit(): void {
  }

  buscarCaregorias(){
    this.cargar = true;
  }

  
}
