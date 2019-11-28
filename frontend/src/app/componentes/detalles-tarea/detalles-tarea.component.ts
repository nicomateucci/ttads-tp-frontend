import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { TareaService} from '../../servicios/tarea.service';
import { Tarea } from '../../modelos/tarea';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-tarea',
  templateUrl: './detalles-tarea.component.html',
  styleUrls: ['./detalles-tarea.component.css']
})
export class DetallesTareaComponent implements OnInit {

  @Input() tarea: Tarea;

  constructor( private route: ActivatedRoute,
               private tareaService: TareaService,
               private location: Location
  ) { }

  tareaForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
  }, [Validators.required]);
  ngOnInit(
  ) {
    this.getTarea()
  }

  getTarea(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tareaService.getTarea(String(id))
      .subscribe((t: any) => this.tarea = t);
  }

  volver(): void {
    this.location.back();
  }

  onSubmit(t: Tarea){
    this.tareaService.putTarea(t).subscribe(
      () => {
        console.log('Tarea editada correctamente');
      },
      error => console.log(error)
    );
  }

}
