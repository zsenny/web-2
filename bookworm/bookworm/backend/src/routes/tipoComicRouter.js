const express = require('express');
const router = express.Router(); 

const tipoComic_controller = require('../controllers/tipoComicController'); 


router.post('/tipoComic', tipoComic_controller.tipoComic_create);
router.get('/tipoComic', tipoComic_controller.tipoComic_getall);
router.get('/tipoComic/:id', tipoComic_controller.tipoComic_getbyid);
router.put('/tipoComic/:id', tipoComic_controller.tipoComic_update);
router.delete('/tipoComic/:id', tipoComic_controller.tipoComic_delete);

module.exports = router; 