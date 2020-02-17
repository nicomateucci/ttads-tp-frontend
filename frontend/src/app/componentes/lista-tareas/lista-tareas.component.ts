import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../servicios/tarea.service';
import { Tarea } from '../../modelos/tarea';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas: [];
  // tareas: Tarea[];
  // selectedTarea: any = null;

  constructor( private tareaService: TareaService,
    private httpClient: HttpClient
   ) { }

  ngOnInit() {
    this.cargarTareas();
  }

  private cargarTareas() {
    this.tareaService.getTareas()
      .subscribe((tareas: any) => { this.tareas = tareas});
  }

    // this.httpClient.get('https://conduit.productionready.io/api/articles')
    //   .subscribe((response: any) => this.articles = response.articles);
  onTareaRowClicked(article: any) {
    // this.selectedArticle = article;
  }

  borrarTarea(t: Tarea) {
    if (window.confirm('Esta seguro que desea eliminar la tarea seleccionada ?')) {
      this.tareaService.deleteTarea(t._id).subscribe(
        () => {
          // this.toast.setMessage('item deleted successfully.', 'success');
          console.log('Tarea borrada correctamente');
        },
        error => console.log(error)
      );
    }
  }
}
