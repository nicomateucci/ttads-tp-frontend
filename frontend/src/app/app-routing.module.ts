import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesTareaComponent } from './componentes/detalles-tarea/detalles-tarea.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';
import { AppErrorComponent } from './componentes/app-error/app-error.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'tareas', component: PaginaPrincipalComponent },
  { path: 'lista', component: ListaTareasComponent },
  { path: 'error', component: AppErrorComponent },
  { path:':id', component: DetallesTareaComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  // Recargar automaticamente compoenntes pero no funciono
  // imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
