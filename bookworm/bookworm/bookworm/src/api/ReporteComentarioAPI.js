import { axiosBase as axios } from "./Config";

export const GetAllReportesComentarios = async () => {
    try{
        const response = await axios.get('/reporteComentario');     
        console.log("ObtenerTodosLosReportesDeComentarios", response);
        return response.data;
    }
    catch(error)
    {
        console.error("FUUUUUUUUUUUUUUUUUUU Reportes de comentarios" + error);
        return error;
    }
}