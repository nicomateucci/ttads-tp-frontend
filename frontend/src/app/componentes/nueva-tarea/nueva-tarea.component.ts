import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TareaService} from '../../servicios/tarea.service';
import { Tarea } from '../../modelos/tarea';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  agregarTareaForm: FormGroup;
  titulo = new FormControl('', [Validators.required]);
  descripcion = new FormControl('', [Validators.required]);
  fecha = new FormControl('', [Validators.required]);
  // tarea = new Tarea();

  constructor(
    private tareaService: TareaService,
    private formBuilder: FormBuilder
  ) {  }

  ngOnInit() {
    this.agregarTareaForm = this.formBuilder.group({
      titulo: this.titulo,
      descripcion: this.descripcion,
      fecha: this.fecha
  })}

  agregarTarea() {
    this.tareaService.postTarea(this.agregarTareaForm.value)
      .subscribe(
        res => {
        alert('Tarea agregada correctamente');
        this.agregarTareaForm.reset();
        },
        err => console.log(err));
  }

  // private cargarTareas() {
  //   this.tareaService.getTareas()
  //     .subscribe((tareas: any) => {console.log('En subscribe response', tareas);
  //                                     this.tareas = tareas});
  //   console.log("En cargarTareas");
  // }

}
