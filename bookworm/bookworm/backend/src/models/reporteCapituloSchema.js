const mongoose = require('mongoose')

const ReporteCapituloSchema = new mongoose.Schema({ //Aun no lo termino
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
        required: true,
        minlength: 4,
        maxlength: 200
    }
    //Falta tipo de queja?
})

const ReporteCapitulo= mongoose.model('reportecapitulo', ReporteCapituloSchema); 
module.exports = ReporteCapitulo; 