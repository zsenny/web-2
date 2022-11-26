const express = require('express');
const router = express.Router(); 

const capitulo_controller = require('../controllers/capituloController'); 


router.post('/capitulo', capitulo_controller.capitulo_create);
router.get('/capitulo', capitulo_controller.capitulo_getall);
router.get('/capitulo/:id', capitulo_controller.capitulo_getbyid);
router.put('/capitulo/:id', capitulo_controller.capitulo_update);
router.delete('/capitulo/:id', capitulo_controller.capitulo_delete);

module.exports = router; 