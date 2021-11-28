import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'ingresos', component: IngresosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'trabajadores', component: TrabajadoresComponent},
  {path: 'ventas', component: VentasComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
