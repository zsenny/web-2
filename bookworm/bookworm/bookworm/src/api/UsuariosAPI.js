import { axiosBase as axios } from "./Config";

export const CreateUsuario = async (usuario) => {
    try{
        const response = await axios.post("/usuario", usuario, {
            //request configuration 
        })
        console.log("createSchoolResp", response);
    }
    catch(error){
        console.error(error);
        return error;
    }
}