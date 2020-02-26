import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesTareaComponent } from './componentes/detalles-tarea/detalles-tarea.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'tareas', component: PaginaPrincipalComponent  },
  { path: ':id', component: DetallesTareaComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  // Recargar automaticamente compoenntes pero no funciono
  // imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
