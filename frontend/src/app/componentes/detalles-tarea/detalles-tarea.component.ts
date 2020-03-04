import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { TareaService} from '../../servicios/tarea.service';
import { Tarea } from '../../modelos/tarea';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalles-tarea',
  templateUrl: './detalles-tarea.component.html',
  styleUrls: ['./detalles-tarea.component.css'],
  providers: [ DatePipe ]
})
export class DetallesTareaComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private router: Router,
               private tareaService: TareaService,
               private location: Location,
               private formBuilder: FormBuilder,
               private datePipe: DatePipe
  ) { }


  id: string;
  tarea: Tarea;
  private sub: Subscription;

  tareaForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
  }, [Validators.required]);
  // tareaForm: FormGroup;
  // titulo = new FormControl('', [Validators.required]);
  // descripcion = new FormControl('', [Validators.required]);
  // fecha = new FormControl(new Date(), [Validators.required]);
  // fechaActual: any = new Date();

  ngOnInit(
  ) {
    this.getTarea();
  }

  getTarea(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.route.params.subscribe((params) => {
    //     let id = params.get('id');
    // });
    this.sub = this.route.params.subscribe(params => {
            this.id  = params['id'];
        });
    // console.log("En detalles tarea, el id es", this.id);
    this.tareaService.getTarea(String(this.id))
      .subscribe((tar: Tarea) => {
        this.tarea = tar;
        this.tareaForm.patchValue(this.tarea);
      }, err => { this.router.navigateByUrl("/error")});
  }

  volver(): void {
    this.location.back();
  }

  onSubmit(){
    if (window.confirm('Confirmar edición de la tarea seleccionada ?')) {
    this.tareaForm.value._id = this.tarea._id;
    this.tareaService.putTarea(this.tareaForm.value).subscribe(
      (t: Tarea) => {
        // console.log('Tarea editada correctamente', t);
        this.router.navigateByUrl("/tareas");
      },
      err => { this.router.navigateByUrl("/error");}
    );
    }
  }
}
