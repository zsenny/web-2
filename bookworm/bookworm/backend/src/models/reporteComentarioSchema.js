const mongoose = require('mongoose')

const ReporteComentarioSchema = new mongoose.Schema({ //Aun no lo termino
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
        required: true
    },
    idComentario: { //referenciar pagina aqui
        type: mongoose.Schema.Types.ObjectId,
        ref: "comentario",
        required: true
    },
    contenido: { //que mas le pongo?
        type: String,
        required: true,
        minlength: 4,
        maxlength: 200
    }
    //Falta tipo de queja?
})

const ReporteComentario= mongoose.model('reportecomentario', ReporteComentarioSchema); 
module.exports = ReporteComentario; 
