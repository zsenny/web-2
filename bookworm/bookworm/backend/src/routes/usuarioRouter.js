//en este lugar se definen las rutas validas
const express = require('express');
const router = express.Router(); //objeto dentro de express que nos permite definir rutas dentro de nuestra aplicacion, nuestro API

const usuario_controller = require('../controllers/usuarioController'); //este es controller que tiene las funciones
//Le tenemos que indicar 3 cosas:



//Metodo http
//Ruta
//Funcion js
//Por cada conjunto de estos 3 parametros nos creara una ruta valida dentro de nuestra aplicacion

router.post('/usuario', usuario_controller.usuario_create);//Cuando venga un post a la ruta /school, ejecuta la funcion school create de school controller
router.get('/usuario', usuario_controller.usuario_getall);
router.get('/usuario/:id', usuario_controller.usuario_getbyid);
router.put('/usuario/:id', usuario_controller.usuario_update);
router.delete('/usuario/:id', usuario_controller.usuario_delete);

module.exports = router; //exportamos el router, porque contiene todas las rutas que nosotros definamos