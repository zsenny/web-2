//aqui se definen las rutas validas a un esquema o modelo
//aqui estaran las FUNCIONALIDADES
const Usuario = require('../models/usuarioSchema');

exports.usuario_create = async (req, res) => {
    //tomar los datos del body
    const {body} = req;  //le sacamos una copia y lo guardamos en esa variable 
    //body esta a la altura de req

    //console.log(req.body)

    //  Validacion de informacion
    //  campos requeridos, longitud de textos, valores numericos mayores o menores a X, tenga un valor


    //Y si no se cumplen(esto va dentro de un if): 
    //res.send({message: "El campo tal, no cumple con X validacion"})



    let newUsuario = new Usuario(body);
    

    await newUsuario
    .save()
    .then(newDBObject => console.log("Success!", newDBObject))
    .catch((err) => console.log("oops!", err));

    res.send(newUsuario);
};

exports.usuario_getall = async (req, res) =>{
    //consultara todos los registros de la base de datos y los regresara como lista
    const data = await Usuario.find();

    res.send(data); //regresara el data
}; 

exports.usuario_getbyid = async (req, res) => {
    //req.query
    //console.log(req.params);
    const {id} = req.params; //id esta a la altura de params


    //validacion de que si trae un parametro

    const data = await Usuario.findById(id)

    res.send(data);
};

exports.usuario_update = async (req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Usuario.findOneAndUpdate({_id: id}, body);
    //esto busca y me lo regresa y luego me lo actualiza. Entonces data contiene la version original

    res.send(data);
};

exports.usuario_delete = async (req, res) => {
    const {id} = req.params;

    await Usuario.deleteOne({_id: id});

    res.send({message: "Usuario borrado exitosamente"});
}

//CRUD
//Esto es un CRUD de una entidad mi base de datos, de una tabla. 