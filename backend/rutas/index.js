const router=require('express').Router();

router.use('/api/tareas', require('./tareas'));

module.exports=router;
