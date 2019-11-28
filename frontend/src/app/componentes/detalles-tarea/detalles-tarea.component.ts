import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TareaService} from '../../servicios/tarea.service';
import { Tarea } from '../../modelos/tarea';

@Component({
  selector: 'app-detalles-tarea',
  templateUrl: './detalles-tarea.component.html',
  styleUrls: ['./detalles-tarea.component.css']
})
export class DetallesTareaComponent implements OnInit {

  constructor( private tareaService: TareaService) { }

  ngOnInit() {
  }

  onSubmit(t: Tarea){
    
  }

}
