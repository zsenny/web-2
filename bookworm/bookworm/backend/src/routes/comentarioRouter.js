const express = require('express');
const router = express.Router(); 

const comentario_controller = require('../controllers/comentarioController'); 


router.post('/comentario', comentario_controller.comentario_create);
router.get('/comentario', comentario_controller.comentario_getall);
router.get('/comentario/:id', comentario_controller.comentario_getbyid);
router.put('/comentario/:id', comentario_controller.comentario_update);
router.delete('/comentario/:id', comentario_controller.comentario_delete);

module.exports = router; 