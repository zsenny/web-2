const Tipo = require('../models/tipoComicSchema');

exports.tipoComic_create = async (req, res) => {
    const {body} = req;  

    let newTipoComic = new Tipo(body);
    

    await newTipoComic
    .save()
    .then(newDBObject => console.log("Success!", newDBObject))
    .catch((err) => console.log("oops!", err));

    res.send(newTipoComic);
};

exports.tipoComic_getall = async (req, res) =>{
    const data = await Tipo.find();

    res.send(data);
}; 

exports.tipoComic_getbyid = async (req, res) => {
    const {id} = req.params; 
    console.log(req.params);

    const data = await Tipo.findById(id)

    res.send(data);
};

exports.tipoComic_update = async (req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Tipo.findOneAndUpdate({_id: id}, body);

    res.send(data);
};

exports.tipoComic_delete = async (req, res) => {
    const {id} = req.params;

    await Tipo.deleteOne({_id: id});

    res.send({message: "Tipo de comic borrado exitosamente"});
}
