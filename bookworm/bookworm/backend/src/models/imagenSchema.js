const mongoose = require('mongoose')

const ImagenSchema = new mongoose.Schema({ //Aun no lo termino
    imagen: {
        type: String,
        required: true
    }
})

const Imagen= mongoose.model('imagen', ImagenSchema); 
module.exports = Imagen; 