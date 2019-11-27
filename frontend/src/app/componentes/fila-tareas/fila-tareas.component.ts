import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fila-tareas',
  templateUrl: './fila-tareas.component.html',
  styleUrls: ['./fila-tareas.component.css']
})
export class FilaTareasComponent implements OnInit {
  @Input() tarea: any;

  constructor() { }

  ngOnInit() {
  }

}
