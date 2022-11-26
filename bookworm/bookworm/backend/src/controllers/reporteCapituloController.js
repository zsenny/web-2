const ReporteCapitulo = require('../models/reporteCapituloSchema');

exports.reporteCapitulo_create = async (req, res) => {
    const {body} = req;  

    let newReporteCapitulo = new ReporteCapitulo(body);
    

    await newReporteCapitulo
    .save()
    .then(newDBObject => console.log("Success!", newDBObject))
    .catch((err) => console.log("oops!", err));

    res.send(newReporteCapitulo);
};

exports.reporteCapitulo_getall = async (req, res) =>{
    const data = await ReporteCapitulo.find().populate("idUsuario").populate("idCapitulo");

    res.send(data);
}; 

exports.reporteCapitulo_getbyid = async (req, res) => {
    const {id} = req.params; 
    console.log(req.params);

    const data = await ReporteCapitulo.findById(id).populate("idUsuario").populate("idCapitulo");

    res.send(data);
};

exports.reporteCapitulo_update = async (req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await ReporteCapitulo.findOneAndUpdate({_id: id}, body);

    res.send(data);
};

exports.reporteCapitulo_delete = async (req, res) => {
    const {id} = req.params;

    await ReporteCapitulo.deleteOne({_id: id});

    res.send({message: "Reporte a capitulo borrado exitosamente"});
}
