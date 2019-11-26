import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../servicios/tarea.service';
import { Tarea } from '../../modelos/tarea'

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas: Tarea[];

  constructor( private tareaService: TareaService ) { }

  ngOnInit() {
    this.getTareas();
  }

  getTareas(): void {
    this.tareas = this.tareaService.getTareas() as any;
    // this.tareaService.getTareas()
    //   .subscribe( tareas => this.tareas = tareas);
  }

}
