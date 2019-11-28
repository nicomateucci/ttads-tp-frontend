import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesTareaComponent } from './componentes/detalles-tarea/detalles-tarea.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detalles/:id', component: DetallesTareaComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
