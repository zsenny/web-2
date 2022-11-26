const mongoose = require('mongoose')

const TiposEnum = Object.freeze({"Actualizacion":1, "Seguidores":2, "Comentario":3})
const NotificacionSchema = new mongoose.Schema({ //Aun no lo termino
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
        required: true
    },
    tipoNotificacion: { //referenciar pagina aqui
        type: String,
        enum : ['ACTUALIZACION', 'SEGUIDOR', 'COMENTARIO'],
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

const Notificacion= mongoose.model('notificacion', NotificacionSchema); 
module.exports = Notificacion; 
