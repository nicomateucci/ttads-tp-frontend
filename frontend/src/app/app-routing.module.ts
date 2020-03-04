import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesTareaComponent } from './componentes/detalles-tarea/detalles-tarea.component';
import { BuscarTareaComponent } from './componentes/buscar-tarea/buscar-tarea.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';
import { AppErrorComponent } from './componentes/app-error/app-error.component';
import { CargandoComponent } from './componentes/cargando/cargando.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'tareas', component: PaginaPrincipalComponent },
  { path: 'lista', component: ListaTareasComponent },
  { path: 'error', component: AppErrorComponent },
  { path: 'cargando', component: CargandoComponent },
  { path:':id', component: DetallesTareaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  // Recargar automaticamente compoenntes pero no funciono
  // imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
