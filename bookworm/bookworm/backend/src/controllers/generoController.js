const Genero = require('../models/generoSchema');

exports.genero_create = async (req, res) => {
    const {body} = req;  

    let newGenero = new Genero(body);
    

    await newGenero
    .save()
    .then(newDBObject => console.log("Success!", newDBObject))
    .catch((err) => console.log("oops!", err));

    res.send(newGenero);
};

exports.genero_getall = async (req, res) =>{
    const data = await Genero.find();

    res.send(data);
}; 

exports.genero_getbyid = async (req, res) => {
    const {id} = req.params; 
    console.log(req.params);

    const data = await Genero.findById(id)

    res.send(data);
};

exports.genero_update = async (req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Genero.findOneAndUpdate({_id: id}, body);

    res.send(data);
};

exports.genero_delete = async (req, res) => {
    const {id} = req.params;

    await Genero.deleteOne({_id: id});

    res.send({message: "Tipo de genero borrado exitosamente"});
}
