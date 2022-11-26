const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50,
        unique:true
    },
    contrasena: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50,
        unique:true
    },
    correo: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50,
        unique:true
    },
    tipo: {
        type: Boolean,
        required: true
    },
    imagen: {
        type:Buffer,
        required: true
    },
    seguidos:[{ //Este requiere trabajo
        type: String,
        required: false //aqui
    }]
})
//lo de aqui arriba son las reglas de la coleccion de la base de datos. 
//El esquema son las reglas, que indican que se puede y no se puede hacer en una coleccion

const Usuario= mongoose.model('usuario', UsuarioSchema); //va a haber un modelo llamado school, representa una coleccion de la BD
module.exports = Usuario; //cuando hagan referencia a la base de datos, use la constante de la base de datos.
