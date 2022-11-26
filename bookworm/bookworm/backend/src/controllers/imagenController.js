const Imagen = require('../models/imagenSchema');

exports.imagen_create = async (req, res) => {
    const {body} = req;  

    let newImagen = new Imagen(body);
    

    await newImagen
    .save()
    .then(newDBObject => console.log("Success!", newDBObject))
    .catch((err) => console.log("oops!", err));

    res.send(newImagen);
};

exports.imagen_getall = async (req, res) =>{
    const data = await Imagen.find();

    res.send(data);
}; 

exports.imagen_getbyid = async (req, res) => {
    const {id} = req.params; 
    console.log(req.params);

    const data = await Imagen.findById(id);

    res.send(data);
};

exports.imagen_update = async (req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Imagen.findOneAndUpdate({_id: id}, body);

    res.send(data);
};

exports.imagen_delete = async (req, res) => {
    const {id} = req.params;

    await Imagen.deleteOne({_id: id});

    res.send({message: "Imagen borrada exitosamente"});
}
