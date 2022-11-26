const express = require('express');
const router = express.Router(); 

const comic_controller = require('../controllers/comicController'); 


router.post('/comic', comic_controller.comic_create);
router.get('/comic', comic_controller.comic_getall);
router.get('/comic/:id', comic_controller.comic_getbyid);
router.put('/comic/:id', comic_controller.comic_update);
router.delete('/comic/:id', comic_controller.comic_delete);

module.exports = router; 