import { Component, OnInit, Input } from '@angular/core';
import { TareaService } from '../../servicios/tarea.service';
import { Tarea } from '../../modelos/tarea';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas = [];
  colorTarea: string;
  filterPost = [];
  @Input() tareasFiltradas: Array<any>;
  // tareas: Tarea[];
  // selectedTarea: any = null;

  constructor( private tareaService: TareaService,
               private httpClient: HttpClient,
               private route: ActivatedRoute,
               private router:Router
   ) { }

  ngOnInit() {

    this.cargarTareas();
  }

  private cargarTareas() {
    this.tareaService.getTareas()
      .subscribe((tareas: any) => { this.tareas = tareas;
        },err => {console.log(err); this.router.navigateByUrl("/error");});
  }

  toEditarTarea(t: Tarea){
    // console.log("Tarea es ", t);
    this.router.navigate(['/', t._id]);
  }

  borrarTarea(t: Tarea) {
    // console.log("Tarea es ", t);
    if (window.confirm('Esta seguro que desea eliminar la tarea seleccionada ?')) {
      this.tareaService.deleteTarea(t._id).subscribe(
        () => {
          // this.toast.setMessage('item deleted successfully.', 'success');
          console.log('Tarea borrada correctamente');
        },
        err => {console.log(err); this.router.navigateByUrl("/error");}
      );
    }
    this.reloadPage();
  }

  reloadPage() {
    this.ngOnInit();
    this.ngOnInit();
  }

  completarTarea(t: Tarea){
    this.tareaService.checkTarea(t._id).subscribe(
      () => {console.log("Tarea completada")},
      err => {console.log(err);
        // this.router.navigateByUrl("/error");
      }
    );
    this.reloadPage();
  }
}
