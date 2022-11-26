const express = require('express');
const router = express.Router(); 

const notificacion_controller = require('../controllers/notificacionController'); 


router.post('/notificacion', notificacion_controller.notificacion_create);
router.get('/notificacion', notificacion_controller.notificacion_getall);
router.get('/notificacion/:id', notificacion_controller.notificacion_getbyid);
router.put('/notificacion/:id', notificacion_controller.notificacion_update);
router.delete('/notificacion/:id', notificacion_controller.notificacion_delete);

module.exports = router; 