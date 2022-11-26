const mongoose = require('mongoose')

const AdministradorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20,
        unique:true
    },
    contrasena: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20,
        unique:true
    },
    tipo: {
        type: Boolean,
        required: true
    },
    seguidos:[{ //Este requiere trabajo
        type: String,
        required: false //aqui
    }]
})

const Administrador= mongoose.model('adminstrador', AdministradorSchema); 
module.exports = Administrador; 