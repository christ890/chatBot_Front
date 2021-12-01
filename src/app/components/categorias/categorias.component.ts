import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../models/categoria.model';
import { CategoriaService } from '../../service/categoria.service';

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


  ngOnInit(): void {
  }

}
