import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
