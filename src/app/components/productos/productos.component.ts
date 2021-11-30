import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from '../../models/productos.model';
import { ProductosService } from '../../service/productos.service';
import { Categoria } from '../../models/categoria.model';
import { Proveedores } from '../../models/proveedores.model';
import { ProveedoresService } from '../../service/proveedores.service';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Productos[] = [];

  categoria: Categoria[] = [];
  proveedor: Proveedores[] = [];

  constructor(private router: Router, private productosService: ProductosService, private proveedorService: ProveedoresService, private categoriaService: CategoriaService) {
    this.productosService.listarProductos().subscribe(
      response => this.productos = response
    ),
    this.productosService.listarProductos().subscribe(
      response => this.productos = response
    );
  
  }


 /* listar() {
    this.productosService.listarProductos().subscribe(
      response => this.productos = response
    );
  }

  listarProv(){
    this.proveedorService.listarProveedor().subscribe(
      (proveedores)=>this.proveedor = proveedores
    );
  }
*/
  ngOnInit(): void {
  }

}
