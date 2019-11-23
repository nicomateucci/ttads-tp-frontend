export class Tarea {

    constructor(_id = '', titulo = '', descripcion = '', fecha = '', estado = false) {
        this._id = _id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.estado = estado;
    }

    _id: string;
    titulo: string;
    descripcion: string;
    fecha: string;
    estado: boolean;
}
