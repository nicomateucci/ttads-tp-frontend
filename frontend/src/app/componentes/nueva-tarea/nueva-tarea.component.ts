import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
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
  ) {}

  // formControl = new FormControl('formTarea');
  tareaForm = new FormGroup({
    // titulo: new FormControl('', [this.createCustomValidator()]),
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', Validators.maxLength(50)),
    fecha: new FormControl('', [Validators.required]),
  }, [Validators.required]);

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.tareaForm.value);
    // tarea = new Tarea();
    // tarea.titulo = data

    alert('Tarea agregada correctamente');
    this.tareaForm.reset();
  }

}
