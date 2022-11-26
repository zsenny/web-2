import { axiosBase as axios } from "./Config";

export const CreateUsuario = async (usuario) => {
    try{
        const response = await axios.post("/usuario", usuario, {
            //request configuration 
        })
        console.log("Crear usuario ", response);
    }
    catch(error){
        console.error("NOOOOOOOOOOOOOOOOOOOOOOOOO Error de creacion de usuario! " + error);
        return error;
    }
}

//quite token
export const GetUsuarioById = async () => {
    try{
        const response = await axios.get('/usuario/' + "613f0802d3fee5546d011eb6");                                         
        console.log("ObtenerUsuario", response);
        return response.data;
    }
    catch(error)
    {
        console.error("FUUUUUUUUUUUUUUUUUUU Usuario" + error);
        return error;
    }
}

export const ModifyUsuarioById = async (usuario) => {
    try{
        const response = await axios.put('/usuario/' + "613f0802d3fee5546d011eb6",usuario);                                         
        console.log("ModificarUsuario", response);
        return response.data;
    }
    catch(error)
    {
        console.error("Se resiste al CAMBIOOOOOOOOOOOO Usuario" + error);
        return error;
    }
}

export const DeleteUsuarioById = async () => {
    try{
        const response = await axios.delete('/usuario/' + "6193fe8c026d537990ab4911");                                         
        console.log("Eliminar Usuario ", response);
        return response.data;
    }
    catch(error)
    {
        console.error("ESTE usuario no quiere ATOMIZARSE" + error);
        return error;
    }
}