const mongoose = require('mongoose')

const GeneroSchema = new mongoose.Schema({ 
    nombre: {
        type: String,
        minlength: 4,
        maxlength: 30,
        required: true,
        unique:true
    }
})

const Genero= mongoose.model('genero', GeneroSchema); 
module.exports = Genero; 