import { axiosBase as axios } from "./Config";

//quite token
export const PostNotificacion = async (notificacion) => {
    try{
        const response = await axios.get('/notificacion', notificacion);                                         //se tiene que especificar que tipo de token es, en este caso Bearer
        console.log("ObtenerTodosLosComics", response);
        return response.data;
    }
    catch(error)
    {
        console.error("FUUUUUUUUUUUUUUUUUUU" + error);
        return error;
    }
}

export const GetNotificacionById = async () => {
    try{
        const response = await axios.get('/notificacion/' + "6141238c89501894c44f437c");                                         
        console.log("Obtenidas notificaciones", response);
        return response.data;
    }
    catch(error)
    {
        console.error("FUUUUUUUUUUUUUUUUUUU Notificaciones" + error);
        return error;
    }
}