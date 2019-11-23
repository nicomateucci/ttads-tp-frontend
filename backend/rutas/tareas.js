const express = require('express');
const router = express.Router();
const tarea = require('../controladores/tarea.controller');

router.get('/', tarea.getTareas);
router.post('/', tarea.createTarea);
router.get('/:id', tarea.getTarea);
router.put('/:id', tarea.editTarea);
router.delete('/:id', tarea.deleteTarea);
router.get('/:id/completada', tarea.checkTarea);

module.exports = router;
