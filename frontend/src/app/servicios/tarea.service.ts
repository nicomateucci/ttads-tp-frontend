import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor() { }

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
  postTarea(Tarea: Tarea) {
    return this.http.post(this.URL_API, Tarea);
  }
  // api/tareas
  getTareas() {
    return this.http.get(this.URL_API);
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
  getTarea(_id: string) {
    return this.http.get(this.URL_API + `/${_id}/completada`);
  }

}
