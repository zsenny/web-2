const express = require('express');
const router = express.Router(); 

const genero_controller = require('../controllers/generoController'); 


router.post('/genero', genero_controller.genero_create);
router.get('/genero', genero_controller.genero_getall);
router.get('/genero/:id', genero_controller.genero_getbyid);
router.put('/genero/:id', genero_controller.genero_update);
router.delete('/genero/:id', genero_controller.genero_delete);

module.exports = router; 