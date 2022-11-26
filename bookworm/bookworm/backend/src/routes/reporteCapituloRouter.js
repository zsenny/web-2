const express = require('express');
const router = express.Router(); 

const reporteCapitulo_controller = require('../controllers/reporteCapituloController'); 


router.post('/reporteCapitulo', reporteCapitulo_controller.reporteCapitulo_create);
router.get('/reporteCapitulo', reporteCapitulo_controller.reporteCapitulo_getall);
router.get('/reporteCapitulo/:id', reporteCapitulo_controller.reporteCapitulo_getbyid);
router.put('/reporteCapitulo/:id', reporteCapitulo_controller.reporteCapitulo_update);
router.delete('/reporteCapitulo/:id', reporteCapitulo_controller.reporteCapitulo_delete);

module.exports = router; 