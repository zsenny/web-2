const mongoose = require('mongoose')

const TipoComicSchema = new mongoose.Schema({ 
    nombre: { 
        type: String,
        minlength: 4,
        maxlength: 30,
        required: true,
        unique: true
    }
})

const TipoComic= mongoose.model('tipo', TipoComicSchema); 
module.exports = TipoComic; 