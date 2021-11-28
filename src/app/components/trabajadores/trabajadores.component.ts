import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
