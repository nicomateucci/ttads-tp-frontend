import { Component, OnInit } from '@angular/core';
import { TareaService} from '../../servicios/tarea.service';
import {  Router } from '@angular/router';
import { FormBuilder, AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-buscar-tarea',
  templateUrl: './buscar-tarea.component.html',
  styleUrls: ['./buscar-tarea.component.css']
})
export class BuscarTareaComponent implements OnInit {

  buscarForm: FormGroup;
  cadena = new FormControl('', [Validators.required]);
  constructor(
    private tareaService: TareaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buscarForm = this.formBuilder.group({
      cadena: this.cadena
  })}

  buscarTarea(cad: any){
    //Metodo que envia al backend descripcion y mongo busque de la misma manera que hice en el parcial
    //EN caso de no encontrar, mandar mensaje de no encontrada y redireccionar a pagina inicial
    console.log("En filtrar", cad.value);
    this.tareaService.filtrarTarea(cad.value).subscribe(
      (tareas: any) => {
        console.log("En filtrar", cad.value);
        // this.router.navigateByUrl("/error");
        setInterval(() => { this.router.navigate(['/tareas', tareas]) }, 2000);
        // this.router.navigate(['/tareas', tareas])
      },
        // this.router.navigateByUrl("/tareas", tareas)},
      err => {console.log(err); this.router.navigateByUrl("/error");});
  }
}
