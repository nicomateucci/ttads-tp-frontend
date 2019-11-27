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

  // tareas: Tarea[];
  tareas: [];
  // selectedTarea: any = null;

  constructor( private tareaService: TareaService,
    private httpClient: HttpClient
   ) { }

  ngOnInit() {
    this.cargarTareas();
  }

  private cargarTareas() {
    this.tareaService.getTareas()
      .subscribe((tareas: any) => {console.log('En subscribe response', tareas);
                                      this.tareas = tareas});
    console.log("En cargarTareas");

    // this.httpClient.get('https://conduit.productionready.io/api/articles')
    //   .subscribe((response: any) => this.articles = response.articles);
  }

  onTareaRowClicked(article: any) {
    // this.selectedArticle = article;
  }

}
