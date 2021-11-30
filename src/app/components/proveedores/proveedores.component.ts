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

  constructor(private router: Router, private proveedorService: ProveedoresService) {
    this.listar();
    
  }


  listar() {
    this.proveedorService.listarProveedor().subscribe(
      response => this.proveedor = response
    );
  }

  ngOnInit(): void {
  }
}