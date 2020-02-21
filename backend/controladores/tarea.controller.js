const Tarea = require('../modelos/Tarea.js')

const TareaCtrl = {};

// Metodos de tarea, clase requerida desde mongoose
//    De clase
// tarea.remove({})
// tarea.find() Sería como un getAll()
// tarea.findById(id)
// tarea.update({_id: id}, req.body)
// ---------------------------
//    De instancia
// tarea.save()

TareaCtrl.getTareas = (req, res, next) => {
  Tarea.find()
  .then(tareas => {
    //**************************************************************************************
    //**************************************************************************************
    //**************************************************************************************
    // res.render('index', { tareas }); Horrible, ate al backend a EJS !!!!!!!!!!!!!!!!!

    res.json(tareas);
  })
  .catch(err => console.log(err));
};

TareaCtrl.createTarea = (req, res) => {
  const tarea = new Tarea(req.body);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa ", req.body);
  // const tarea = new Tarea({
  //     titulo: req.body.titulo,
  //     descripcion: req.body.descripcion,
  //     fecha: req.body.fecha
  // });
  tarea.save()
    .then( () => { console.log(tarea , " --- ") ;console.log("Tarea agregada correctamente")})
    .catch(err => console.log(err));
  res.redirect("/api/tareas");
};

TareaCtrl.getTarea = (req, res, next) => {
  const {id} = req.params;
  Tarea.findById(id)
    .then( tarea => res.json(tarea))
    .catch( err => console.log(err));
};

// MODEL updatevar conditions = { name: 'bourne' }
//   , update = { $inc: { visits: 1 }}
//   , options = { multi: true };
//
// Model.update(conditions, update, options, callback);
//
// function callback (err, numAffected) {
//   // numAffected is the number of updated documents
// })

TareaCtrl.editTarea = (req, res, next) => {
  const id = req.params.id;
  Tarea.updateOne({_id: id}, req.body)
    .then( () => console.log("Tarea editada correctamente"))
    .catch( err => console.log(err));
  res.redirect("/api/tareas/");
  // console.log("Parametros: " + JSON.stringify(req.params));
};

TareaCtrl.deleteTarea = (req, res, next) => {
  const id  = req.params.id;
  Tarea.deleteOne({_id: id})
    .then( () => console.log("Tarea borrada correctamente"))
    .catch( err => console.log(err));
  res.redirect("/api/tareas/");
};

TareaCtrl.checkTarea = (req, res, next) => {
  const id = req.params.id;
  Tarea.findById({_id: id})
    .then( (tarea) => {
      tarea.estado = !tarea.estado;
      console.log("La tarea paso al estado " + tarea.estado);
      tarea.save();
    })
    .catch( err => console.log(err))
  res.redirect("/api/tareas/");
}

module.exports = TareaCtrl;
