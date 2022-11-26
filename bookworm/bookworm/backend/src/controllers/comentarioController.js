const Comentario = require('../models/comentarioSchema');

exports.comentario_create = async (req, res) => {
    const {body} = req;  

    let newComentario = new Comentario(body);
    

    await newComentario
    .save()
    .then(newDBObject => console.log("Success!", newDBObject))
    .catch((err) => console.log("oops!", err));

    res.send(newComentario);
};

exports.comentario_getall = async (req, res) =>{
    const data = await Comentario.find().populate("idCapitulo").populate("idUsuario");

    res.send(data);
}; 

exports.comentario_getbyid = async (req, res) => {
    const {id} = req.params; 
    console.log(req.params);

    const data = await Comentario.findById(id).populate("idCapitulo").populate("idUsuario");

    res.send(data);
};

exports.comentario_update = async (req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Comentario.findOneAndUpdate({_id: id}, body);

    res.send(data);
};

exports.comentario_delete = async (req, res) => {
    const {id} = req.params;

    await Comentario.deleteOne({_id: id});

    res.send({message: "Comentario borrado exitosamente"});
}
