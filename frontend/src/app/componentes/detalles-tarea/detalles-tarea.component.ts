import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { TareaService} from '../../servicios/tarea.service';
import { Tarea } from '../../modelos/tarea';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalles-tarea',
  templateUrl: './detalles-tarea.component.html',
  styleUrls: ['./detalles-tarea.component.css']
})
export class DetallesTareaComponent implements OnInit {

  id: string;
  tarea: Tarea;
  private sub: Subscription;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private tareaService: TareaService,
               private location: Location,
               private formBuilder: FormBuilder
  ) { }

  // tareaForm = new FormGroup({
  //   titulo: new FormControl('', [Validators.required]),
  //   descripcion: new FormControl('', [Validators.required]),
  //   fecha: new FormControl('', [Validators.required]),
  // }, [Validators.required]);
  tareaForm: FormGroup;
  titulo = new FormControl('', [Validators.required]);
  descripcion = new FormControl('', [Validators.required]);
  fecha = new FormControl('', [Validators.required]);

  ngOnInit(
  ) {
    this.getTarea();
    this.tareaForm = this.formBuilder.group({
      titulo: this.titulo,
      descripcion: this.descripcion,
      fecha: this.fecha});
  }

  getTarea(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.route.params.subscribe((params) => {
    //     let id = params.get('id');
    // });
    this.sub = this.route.params.subscribe(params => {
            this.id  = params['id'];
        });
    console.log("En detalles tarea, el id es", this.id);
    this.tareaService.getTarea(String(this.id))
      .subscribe((t: any) => this.tarea = t, err => console.log(err));
    console.log(this.tarea);
  }

  volver(): void {
    this.location.back();
  }

  onSubmit(){
    console.log("Tarea en detalles-component", this.tarea);
    this.tareaService.putTarea(this.tarea).subscribe(
      () => {
        console.log('Tarea editada correctamente');
      },
      error => console.log(error)
    );
  }

}
