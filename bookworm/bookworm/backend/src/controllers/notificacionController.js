const Notificacion = require('../models/notificacionSchema');

exports.notificacion_create = async (req, res) => {
    const {body} = req;  

    let newNotificacion = new Notificacion(body);
    

    await newNotificacion
    .save()
    .then(newDBObject => console.log("Success!", newDBObject))
    .catch((err) => console.log("oops!", err));

    res.send(newNotificacion);
};

exports.notificacion_getall = async (req, res) =>{
    const data = await Notificacion.find().populate("idUsuario");

    res.send(data);
}; 

exports.notificacion_getbyid = async (req, res) => {
    const {id} = req.params; 
    console.log(req.params);

    const data = await Notificacion.findById(id).populate("idUsuario");

    res.send(data);
};

exports.notificacion_update = async (req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Notificacion.findOneAndUpdate({_id: id}, body);

    res.send(data);
};

exports.notificacion_delete = async (req, res) => {
    const {id} = req.params;

    await Notificacion.deleteOne({_id: id});

    res.send({message: "Notificacion borrada exitosamente"});
}
