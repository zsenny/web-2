const mongoose = require('mongoose')

const ComentarioSchema = new mongoose.Schema({ //Aun no lo termino
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
        required: true
    },
    idCapitulo: { //referenciar pagina aqui
        type: mongoose.Schema.Types.ObjectId,
        ref: "capitulo",
        required: true
    },
    contenido: { //que mas le pongo?
        type: String,
        minlength: 4,
        maxlength: 200,
        required: true
    }
})

const Comentario= mongoose.model('comentario', ComentarioSchema); 
module.exports = Comentario; 
