import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesTareaComponent } from './componentes/detalles-tarea/detalles-tarea.component';
import { NuevaTareaComponent } from './componentes/nueva-tarea/nueva-tarea.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'tareas', component: NuevaTareaComponent  },
  { path: ':id', component: DetallesTareaComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
