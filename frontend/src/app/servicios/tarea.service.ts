import { Injectable } from '@angular/core';
import { Tarea} from '../modelos/tarea';
import { HttpClientModule, HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  selectedTarea: Tarea;
  tareas: Tarea[];

  // router.get('/', tarea.getTareas);
  // router.post('/', tarea.createTarea);
  // router.get('/:id', tarea.getTarea);
  // router.put('/:id', tarea.editTarea);
  // router.delete('/:id', tarea.deleteTarea);
  // router.get('/:id/completada', tarea.checkTarea);

  private URL_API: string;

  constructor(private http: HttpClient) {
    this.selectedTarea = new Tarea();
    this.URL_API = "http://localhost:3000/api/tareas";
  }

  // api/tareas
  getTareas() {
    return this.http.get(this.URL_API);
  }
  // api/tareas
  postTarea(tarea: Tarea): Observable<Tarea> {
    console.log("En servicio" , tarea);
    return this.http.post<Tarea>(this.URL_API, tarea, httpOptions);
  }
  // api/tareas/:id
  getTarea(_id: string) {
    console.log("En servicio" , _id);
    return this.http.get(this.URL_API + `/${_id}`, httpOptions);
  }
  // api/tareas/:id
  putTarea(tarea: Tarea): Observable<any> {
    console.log("En servicio PUTTAREA" , tarea);
    console.log("RUTA EN PUT" , this.URL_API + `/${tarea._id}`)
    return this.http.put(this.URL_API + `/${tarea._id}`, tarea, { responseType: 'text' });
  }
  // api/tareas/:id
  deleteTarea(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`, { responseType: 'text' });
  }
  // api/tareas/:id/completada
  checkTarea(_id: string) {
    return this.http.get(this.URL_API + `/${_id}/completada`);
  }
  filtrarTarea(titulo: string) {
    return this.http.get(this.URL_API + `/${titulo}/buscar`);
  }


}
