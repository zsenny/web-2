const Capitulo = require('../models/capituloSchema');

exports.capitulo_create = async (req, res) => {
    const {body} = req;  

    let newCapitulo = new Capitulo(body);
    

    await newCapitulo
    .save()
    .then(newDBObject => console.log("Success!", newDBObject))
    .catch((err) => console.log("oops!", err));

    res.send(newCapitulo);
};

exports.capitulo_getall = async (req, res) =>{
    const data = await Capitulo.find().populate('idComic');

    res.send(data);
}; 

exports.capitulo_getbyid = async (req, res) => {
    const {id} = req.params; 
    console.log(req.params);

   const data = await Capitulo.findById(id).populate('idComic');
   //const data = await Capitulo.findById(id);

    res.send(data);
};

exports.capitulo_update = async (req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Capitulo.findOneAndUpdate({_id: id}, body);

    res.send(data);
};

exports.capitulo_delete = async (req, res) => {
    const {id} = req.params;

    await Capitulo.deleteOne({_id: id});

    res.send({message: "Capitulo borrado exitosamente"});
}
