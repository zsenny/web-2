const Comic = require('../models/comicSchema');

exports.comic_create = async (req, res) => {
    const {body} = req;  

    let newComic = new Comic(body);
    

    await newComic
    .save()
    .then(newDBObject => console.log("Success!", newDBObject))
    .catch((err) => console.log("ooooooooops!", err));

    res.send(newComic);
};

exports.comic_getall = async (req, res) =>{
    const data = await Comic.find().populate("tipo").populate("idCreador").catch((err) => console.log("ooooooooops!", err));;
    console.log("comics a la orden!");
    res.send(data);
}; 

exports.comic_getbyid = async (req, res) => {
    const {id} = req.params; 
    console.log(req.params);

    const data = await Comic.findById(id).populate("tipo").populate("idCreador");

    res.send(data);
};

exports.comic_update = async (req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Comic.findOneAndUpdate({_id: id}, body);

    res.send(data);
};

exports.comic_delete = async (req, res) => {
    const {id} = req.params;

    await Comic.deleteOne({_id: id});

    res.send({message: "Comic borrado exitosamente"});
}
