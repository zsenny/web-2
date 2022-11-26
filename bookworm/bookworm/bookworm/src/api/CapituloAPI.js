import { axiosBase as axios } from "./Config";


export const GetCapituloComicById = async () => {
    try{
        const response = await axios.get('/capitulo/' + "61996689d2a88b7192f5229b");                                         
        console.log("Obtenido capitulo", response);
        return response.data;
    }
    catch(error)
    {
        console.error("FUUUUUUUUUUUUUUUUUUU Capitulo de Comic " + error);
        return error;
    }
}

export const CreateCapituloComic = async (capitulo) => {
    try{
        const response = await axios.post("/capitulo", capitulo, {
            //request configuration 
        })
        console.log("Crear capitulo ", response);
    }
    catch(error){
        console.error("NOOOOOOOOOOOOOOOOOOOOOOOOO Error de creacion de capitulo! " + error);
        return error;
    }
}

export const ModifyCapituloComicById = async (capitulo) => {
    try{
        const response = await axios.put('/capitulo/' + "614006a087ab0f9a98c06e7c",capitulo);                                         
        console.log("Modificando capitulo", response);
        return response.data;
    }
    catch(error)
    {
        console.error("Se resiste al CAMBIOOOOOOOOOOOO capitulo" + error);
        return error;
    }
}

export const DeleteCapituloComicById = async () => {
    try{
        const response = await axios.delete('/capitulo/' + "619928c3aaed2ca838909ccf");                                         
        console.log("Eliminar capitulo ", response);
        return response.data;
    }
    catch(error)
    {
        console.error("ESTE capitulo no quiere ATOMIZARSE" + error);
        return error;
    }
}