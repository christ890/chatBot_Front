import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngresosComponent,
    VentasComponent,
    ProductosComponent,
    ProveedoresComponent,
    TrabajadoresComponent,
    ClientesComponent,
    CategoriasComponent,
    MenuComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
