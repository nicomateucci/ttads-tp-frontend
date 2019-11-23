const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();

// Conexion a mongo
// mongoose.connect('mongodb://@localhost/test', {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://localhost/crud-mongo', {useNewUrlParser: true, useUnifiedTopology: true })
 .then( db => console.log('Conexión correcta a MongoDB'))
 .catch( err => console.log(err));

// Configuración
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs');


// middlewares express
app.use(cors());
app.use(morgan('dev')); //Ver peticiones al servidor
app.use(express.urlencoded({extends: false }) );
app.use(methodOverride('_method'));
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// })

// Importar rutas
// const indexRoutes = require('./rutas/index');
// app.use('/', indexRoutes)
app.use(require('./rutas'));
var router=express.Router();
app.use(router);



// Iniciar servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor en puerto ${app.get('port')}`);
})
