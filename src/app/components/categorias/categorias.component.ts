import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias:any = [];
  cargar:boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarCaregorias(){
    this.cargar = true;
  }

  
}
