const mongoose = require('mongoose')

const CapituloComicSchema = new mongoose.Schema({ 
    idComic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comic",
        required: true
    },
    numCapitulo: { 
        type: Number,
        required: true
    },
    nombreCapitulo: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 150
    },
    imagen:{
        type:Buffer,
        required: true
    },
    pagina:{
        type:Buffer,
        required: true
    }
    //Aparetemente, el cap es de 16MB
})

const CapituloComic= mongoose.model('capitulo', CapituloComicSchema); 
module.exports = CapituloComic; 