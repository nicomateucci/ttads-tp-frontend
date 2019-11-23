 const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TareaSchema = new Schema({
  // {type: Schema.Types.ObjectId }
  titulo: String,
  descripcion: String,
  fecha: {
    type: Date,
    default: '1996/06/24'
  },
  estado: {
    type: Boolean,
    default: false
  }
});

// collections tareas
module.exports =  mongoose.model('Tarea', TareaSchema);
