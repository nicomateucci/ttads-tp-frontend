import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevaTareaComponent } from './componentes/nueva-tarea/nueva-tarea.component';
import { BuscarTareaComponent } from './componentes/buscar-tarea/buscar-tarea.component';
import { DetallesTareaComponent } from './componentes/detalles-tarea/detalles-tarea.component';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';
import { BarraPrincipalComponent } from './componentes/barra-principal/barra-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevaTareaComponent,
    BuscarTareaComponent,
    DetallesTareaComponent,
    ListaTareasComponent,
    BarraPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
