import { Injectable } from '@angular/core';
import { Tarea} from '../modelos/tarea';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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

  readonly URL_API = 'http://localhost:3000/api/tareas';

  constructor(private http: HttpClient) {
    this.selectedTarea = new Tarea();
  }

  // api/tareas
  getTareas() {
    return this.http.get(this.URL_API);
  }
  // api/tareas
  postTarea(Tarea: Tarea) {
    return this.http.post(this.URL_API, Tarea);
  }
  // api/tareas/:id
  getTarea(_id: string) {
    return this.http.get(this.URL_API + `/${_id}`);
  }
  // api/tareas/:id
  putTarea(Tarea: Tarea) {
    return this.http.put(this.URL_API + `/${Tarea._id}`, Tarea);
  }
  // api/tareas/:id
  deleteTarea(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  // api/tareas/:id/completada
  checkTarea(_id: string) {
    return this.http.get(this.URL_API + `/${_id}/completada`);
  }

}
