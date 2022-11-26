const express = require('express');
const router = express.Router(); 

const reporteComentario_controller = require('../controllers/reporteComentarioController'); 


router.post('/reporteComentario', reporteComentario_controller.reporteComentario_create);
router.get('/reporteComentario', reporteComentario_controller.reporteComentario_getall);
router.get('/reporteComentario/:id', reporteComentario_controller.reporteComentario_getbyid);
router.put('/reporteComentario/:id', reporteComentario_controller.reporteComentario_update);
router.delete('/reporteComentario/:id', reporteComentario_controller.reporteComentario_delete);

module.exports = router; 