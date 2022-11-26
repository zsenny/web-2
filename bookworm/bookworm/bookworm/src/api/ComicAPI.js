import { axiosBase as axios } from "./Config";


export const GetComicById = async () => {
    try{
        const response = await axios.get('/comic/' + "614000cbdaea07194602c6bd");                                         
        console.log("Obtenido comic", response);
        return response.data;
    }
    catch(error)
    {
        console.error("FUUUUUUUUUUUUUUUUUUU Comic" + error);
        return error;
    }
}

//quite token
export const GetAll = async () => {
    try{
        const response = await axios.get('/comic');                                         //se tiene que especificar que tipo de token es, en este caso Bearer
        console.log("ObtenerTodosLosComics", response);
        return response.data;
    }
    catch(error)
    {
        console.error("FUUUUUUUUUUUUUUUUUUU" + error);
        return error;
    }
}

export const CreateComic = async (comic) => {
    try{
        const response = await axios.post("/comic", comic, {
            //request configuration 
        })
        console.log("Crear comic ", response);
    }
    catch(error){
        console.error("NOOOOOOOOOOOOOOOOOOOOOOOOO Error de creacion de comic! " + error);
        return error;
    }
}

export const ModifyComicById = async (comic) => {
    try{
        const response = await axios.put('/comic/' + "614000cbdaea07194602c6bd",comic);                                         
        console.log("ModificarUsuario", response);
        return response.data;
    }
    catch(error)
    {
        console.error("Se resiste al CAMBIOOOOOOOOOOOO comic" + error);
        return error;
    }
}

export const DeleteComicById = async () => {
    try{
        const response = await axios.delete('/comic/' + "6199273daaed2ca838909ccc");                                         
        console.log("Eliminar capitulo ", response);
        return response.data;
    }
    catch(error)
    {
        console.error("ESTE comic no quiere ATOMIZARSE" + error);
        return error;
    }
}

