const mongoose = require('mongoose')

const PaginaComicSchema = new mongoose.Schema({ //Aun no lo termino
    idComic: {
        type: String,
        required: true
    },
    numCapitulo: { //referenciar pagina aqui
        type: String,
        required: true
    },
    numPagina: { //que mas le pongo?
        type: String,
        minlength: 4,
        maxlength: 300
    }
})

const PaginaComic= mongoose.model('pagina', PaginaComicSchema); 
module.exports = PaginaComic; 