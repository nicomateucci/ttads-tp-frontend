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
    console.log("La tarea es ", tareas);
    res.json(tareas);
  })
  .catch(err => console.log(err));
};

TareaCtrl.createTarea = (req, res) => {
  const tarea = new Tarea(req.body);
  tarea.save()
    .then( () => { console.log("Tarea agregada correctamente" , tarea)})
    .catch(err => console.log(err));
  res.redirect("/api/tareas");
};

TareaCtrl.getTarea = (req, res, next) => {
  const {id} = req.params;
  Tarea.findById(id)
    .then( tarea => res.json(tarea))
    .catch( err => console.log(err));
  // res.redirect("/api/tareas");
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
  // const id = req.params.id;
  const { id } = req.params;
  Tarea.updateOne({_id: id}, req.body)
    .then( () => {
      console.log("Tarea editada correctamente");
      res.status(200).send("Tarea editada correctamente")})
    .catch( err => console.log(err));
// res.writeHead(200, {'Content-Type': 'text/plain'});

// res.redirect("/api/tareas");
  // console.log("Parametros: " + JSON.stringify(req.params));
};

TareaCtrl.deleteTarea = (req, res, next) => {
  const { id } = req.params;
  Tarea.deleteOne({_id: id})
    .then( () => {console.log("Tarea borrada correctamente");
        res.status(200).send("Tarea borrada correctamente")})
    .catch( err => console.log(err));
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.redirect("/api/tareas");
};

TareaCtrl.checkTarea = (req, res, next) => {
  const id = req.params.id;
  Tarea.findById({_id: id})
    .then( (tarea) => {
      tarea.estado = true;
      console.log("La tarea paso al estado " + tarea.estado);
      tarea.save();
      res.status(200).send("Tarea checkeada correctamente")
    })
    .catch( err => console.log(err))
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.redirect("/api/tareas");
}

TareaCtrl.filtrarTarea = (req, res, next) => {
    const titulo = req.params.titulo;
    // var regex = {$regex: name};
    Tarea.find({ "titulo" : {$regex: titulo}})
      .then(tareas => {
        console.log("Se encontraron las tareas ", tareas);
        // res.status(200).send("Tarea encontrada");
        res.status(200);
        res.json(tareas);
      })
      .catch(e => console.log(e));
    };

module.exports = TareaCtrl;
