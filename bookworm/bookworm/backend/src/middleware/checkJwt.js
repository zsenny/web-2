const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const authConfig = {
  domain: "dev-cg9q6sbs.us.auth0.com",
  audience: "https://dev-cg9q6sbs.us.auth0.com/api/v2/" //a que lugar va a enviar la solicitud de validacion del token
}; //esto no es una funcion que manda llamar, es una configuracion

const jwtOptions = { //se apoya del rsa, que genera un secret y ese secret lo genera con base en la unformacion debajo de secret (si, este de abajo)
                    // que genera a base de la informacion debajo del secret que tenemos justo abajo de este comentario, NO ES EL MISMO SECRET que 
                    //nos da auth0 en su pagina, este es otro tipo de secret, es como la forma en la que se esta codificando o decodificando la
                    //informacion dentor del token
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience, //a que lugar va a enviar la solicitud de validacion del token (si, lo de mero arriba)
  issuer: `https://${authConfig.domain}/`, //a que dominio responde
  algorithms: ["RS256"],//esto le esta diciendo que algoritmo utiliza 
};

const checkJwt = jwt(jwtOptions); //funcion que es un manejador de peticiones/solicitudes, cuando lo integramos en una ruta se va a ejecutar y va
//a validar con estas configuraciones, el token que nos este llegando de autorizacion. 

module.exports = checkJwt;