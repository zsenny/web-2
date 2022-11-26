const ReporteComentario = require('../models/reporteComentarioSchema');

exports.reporteComentario_create = async (req, res) => {
    const {body} = req;  

    let newReporteComentario = new ReporteComentario(body);
    

    await newReporteComentario
    .save()
    .then(newDBObject => console.log("Success!", newDBObject))
    .catch((err) => console.log("oops!", err));

    res.send(newReporteComentario);
};

exports.reporteComentario_getall = async (req, res) =>{
    const data = await ReporteComentario.find().populate("idUsuario").populate("idComentario");

    res.send(data);
}; 

exports.reporteComentario_getbyid = async (req, res) => {
    const {id} = req.params; 
    console.log(req.params);

    const data = await ReporteComentario.findById(id).populate("idUsuario").populate("idComentario");

    res.send(data);
};

exports.reporteComentario_update = async (req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await ReporteComentario.findOneAndUpdate({_id: id}, body);

    res.send(data);
};

exports.reporteComentario_delete = async (req, res) => {
    const {id} = req.params;

    await ReporteComentario.deleteOne({_id: id});

    res.send({message: "Reporte a comentario borrado exitosamente"});
}