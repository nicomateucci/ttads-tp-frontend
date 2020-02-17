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
  constructor(
    private tareaService: TareaService,
    private formBuilder: FormBuilder
  ) {}

  agregarTareaForm: FormGroup;
  titulo = new FormControl('', [Validators.required]);
  descripcion = new FormControl('', [Validators.required]);
  fecha = new FormControl('', [Validators.required]);
  // name = new FormControl('', Validators.required);
  // age = new FormControl('', Validators.required);
  // weight = new FormControl('', Validators.required);
  // tareaForm = new FormGroup({
  //   titulo: new FormControl('', [Validators.required]),
  //   descripcion: new FormControl('', [Validators.required]),
  //   fecha: new FormControl('', [Validators.required]),
  // }, [Validators.required]);

  ngOnInit() {
    this.agregarTareaForm = this.formBuilder.group({
      titulo: this.titulo,
      descripcion: this.descripcion,
      fecha: this.fecha
    });
  }

  agregarTarea() {
    console.log(this.agregarTareaForm.value);
    this.tareaService.postTarea(this.agregarTareaForm.value)
      .subscribe( () => {
        alert('Tarea agregada correctamente');
        console.log(this.agregarTareaForm.value);
        // this.cargarTareas();
        this.agregarTareaForm.reset()
    });
  }

  // private cargarTareas() {
  //   this.tareaService.getTareas()
  //     .subscribe((tareas: any) => {console.log('En subscribe response', tareas);
  //                                     this.tareas = tareas});
  //   console.log("En cargarTareas");
  // }

}
