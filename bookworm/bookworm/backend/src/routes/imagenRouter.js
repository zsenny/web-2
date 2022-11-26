const express = require('express');
const router = express.Router(); 

const imagen_controller = require('../controllers/imagenController'); 


router.post('/imagen', imagen_controller.imagen_create);
router.get('/imagen', imagen_controller.imagen_getall);
router.get('/imagen/:id', imagen_controller.imagen_getbyid);
router.put('/imagen/:id', imagen_controller.imagen_update);
router.delete('/imagen/:id', imagen_controller.imagen_delete);

module.exports = router; 