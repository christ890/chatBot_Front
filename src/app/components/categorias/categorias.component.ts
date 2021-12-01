import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Categoria } from '../../models/categoria.model';
import { CategoriaService } from '../../service/categoria.service';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


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
    
  actualiza() {

    this.categoriaService.actualiza(this.categoria).subscribe(
      response => {

        console.log(response.mensaje);
        alert(response.mensaje);

        this.categoriaService.actualiza(this.categoria).subscribe(
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

  listar() {
    this.categoriaService.listarCategoria().subscribe(
      response => this.categorias = response
    );
  }
  registra() {
    this.categoriaService.registra(this.categoria).subscribe(
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

  ngOnInit(): void {
  }

  eliminar(id?: number) {
    this.categoriaService.eliminar(id!).subscribe(
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
  busca(cat: Categoria) {
    this.categoria = cat;
  }
  
}
