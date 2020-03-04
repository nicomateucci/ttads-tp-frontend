import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevaTareaComponent } from './componentes/nueva-tarea/nueva-tarea.component';
import { DetallesTareaComponent } from './componentes/detalles-tarea/detalles-tarea.component';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';
import { BarraPrincipalComponent } from './componentes/barra-principal/barra-principal.component';
import { FilaTareasComponent } from './componentes/fila-tareas/fila-tareas.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { AppErrorComponent } from './componentes/app-error/app-error.component';
import { FiltroPorTituloPipe } from './filtro/filtro-por-titulo.pipe';
import { CargandoComponent } from './componentes/cargando/cargando.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevaTareaComponent,
    DetallesTareaComponent,
    ListaTareasComponent,
    BarraPrincipalComponent,
    FilaTareasComponent,
    PaginaPrincipalComponent,
    AppErrorComponent,
    FiltroPorTituloPipe,
    CargandoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
