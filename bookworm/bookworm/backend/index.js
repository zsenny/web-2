//manten este documento lo mas chico posible, solo usalo para iniciar la app y apuntar (de ahi index)
const express = require('express');  //tengo que tenerlo para decirle a la app para que se conporte como una aplicacion de express
const bodyParser = require("body-parser"); //libreria que ayuda a convertir json a objetos
require('./src/models/connection'); //necesito conectarme a la base de datos
const cors = require('cors');

/* requires de rutas */
//todos los requires de todos los router que hayamos definido
const usuario_router = require('./src/routes/usuarioRouter'); //express neceista rutas para poder funcionar, aqui las defino----!
const tipoComic_router = require('./src/routes/tipoComicRouter'); 
const genero_router = require('./src/routes/generoRouter'); 
const comic_router = require('./src/routes/comicRouter'); 
const capitulo_router = require('./src/routes/capituloRouter'); 
const comentario_router = require('./src/routes/comentarioRouter'); 
const reporteCapitulo_router = require('./src/routes/reporteCapituloRouter'); 
const reporteComentario_router = require('./src/routes/reporteComentarioRouter'); 
const imagen_router = require('./src/routes/imagenRouter'); 
const notificacion_router = require('./src/routes/notificacionRouter'); 
//const student_router = require('./src/routes/studentRouter');


const app = express();
const port = 5000; //5000  //5001

app.use(bodyParser.json());
//app.use(express.bodyParser()) //Alternativa sin externos
app.use(cors());


//aqui vamos poniendo los router de acuerdo a los modelos que yo tengo
app.use('/api', usuario_router); //y asi para definir las rutas----!
app.use('/api', tipoComic_router);
app.use('/api', genero_router);
app.use('/api', comic_router);
app.use('/api', capitulo_router);
app.use('/api', comentario_router);
app.use('/api', reporteCapitulo_router);
app.use('/api', reporteComentario_router);
app.use('/api', imagen_router);
app.use('/api', notificacion_router);

app.get('/', (req, res) => { //Al parecer deberia quitar esto-------------------------------
    //req
    //las que mas nos interesan son:
    //req.query     le envias datos a la solicitud, le envias datos al servidor. Siempre y cuando se puede representar como texto
     //req.body
    console.log(req.query);
    const {idproducto} = req.query;

    console.log(idproducto);
   
    
    res.send("Hola, soy un GET");
})

app.post('/', (req, res) => {
    console.log('req.body', req.body); //es el mensaje de la solicitud. Su body. En post man, post, en body, selecciona raw y JSON
    res.send("Hola, soy un POST");
})  

app.listen(port, () => { //como se ejecutara mi API, en que puerto se ejecuta
    console.log('La aplicacion esta escuchando al puerto http://localhost:' + port) //lo que se ejecuta despues de inicializarse 
})