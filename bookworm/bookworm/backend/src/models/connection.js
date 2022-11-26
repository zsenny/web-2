const mongoose = require("mongoose");

mongoose.Promise = global.Promise; //todas las peticiones de mongoose ahora son globales, pero respetatan la conexion que hacemos aqui
mongoose.connect('mongodb://localhost:27017/TellATale?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {useNewUrlParser: true})
.then(()=> console.log("Conectando a la base de datos de mongoDB"))
.catch(()=> {
    console.log('No se pudo conectar con la base de datos de mongoDB. Teminando proceso');
    process.exit();
});