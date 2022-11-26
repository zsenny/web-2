const mongoose = require('mongoose')

const ComicSchema = new mongoose.Schema({ //Aun no lo termino
    titulo: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 75,
        unique:true
    },
    idCreador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
        required: true
    },
    calificacion: { //este me da cosa...creo que deberia ser un arreglo o deberiamos de hacer otra tabla con calificaciones solas...
        type: Number,
        default: 0
    },
    tipo: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "tipo",
        required: true
    }],
    portada:{
        type:Buffer,
        required: true
    }
})

const Comic= mongoose.model('comic', ComicSchema); 
module.exports = Comic; 
