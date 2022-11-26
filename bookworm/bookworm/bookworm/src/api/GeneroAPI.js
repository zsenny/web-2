import { axiosBase as axios } from "./Config";

export const GetAllGeneros = async () => {
    try{
        const response = await axios.get('/genero');                                         //se tiene que especificar que tipo de token es, en este caso Bearer
        console.log("ObtenerTodosLosGenerosComics", response);
        return response.data;
    }
    catch(error)
    {
        console.error("FUUUUUUUUUUUUUUUUUUU Generos" + error);
        return error;
    }
}