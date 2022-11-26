import React, { useEffect, useState } from 'react'
import '../css/ajustes.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';


import {GetUsuarioById, ModifyUsuarioById } from '../api/UsuarioAPI';
/* Botones */
const Input = styled('input')({
    display: 'none',
});


export default function Ajustes() {
    

    const [usuario, setUsuario] = useState([]);
    useEffect(()=> {
        async function fetchData() {                       
            const usuarioRes = await GetUsuarioById();
            setUsuario(usuarioRes);

        }

        fetchData();
    }, []);

    const [usuario2, setUsuario2] = useState({
        nombre:"",
        contrasena:"",
        correo:"",
        tipo: false,
        seguidos:[]
    });
    
        const handleChange = (e) => {
            const {name, value} = e.target;
    
            setUsuario({
                ...usuario,
                [name]:value
            });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log("Subir un ", usuario);
            await ModifyUsuarioById(usuario);
    
        };
    
    return (
        <div className='contenedorPrincAjustes'>

            <div class="ContenedorDivisor">
                <div class="ImagenPerfilUsuarioAjustes">
                    <img class="imgPerfilUsuario" src="https://pbs.twimg.com/media/FEAcm-jUcAAh5Cr?format=jpg&name=medium" alt="Imagen de perfil"></img>
                   
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <label htmlFor="contained-button-file" class="JalaPoFavo">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                                Seleccionar
                            </Button>
                        </label>
                    </Stack>
                </div>

                <div class="DatosAjustes">

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '40vw' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="standard-basic"
                                label="Usuario"
                                defaultValue=" "
                                variant="standard"
                                value = {usuario.nombre}
                                name = "nombre"
                                onChange = {handleChange}
                            />
                            <div>
                                <TextField
                                    id="standard-multiline-static"
                                    label="Sobre mi"
                                    multiline
                                    rows={4}
                                    defaultValue=" "
                                    variant="standard"
                                />
                            </div>
                        </div>
                    </Box>


                    <Stack direction="row">
                        <div class="JalaPoFavo">
                            <Button variant="contained" color="success" onClick = {handleSubmit}>
                                Guardar datos
                            </Button>
                        </div>
                    </Stack>


                </div>
            </div>

            <Stack direction="row">
                <div class="JalaPoFavo eliminarCuenta">
                    <Button variant="outlined" color="error" id="Eliminarcomic">
                        Eliminar cuenta
                    </Button>
                </div>
            </Stack>


        </div>
    )
}
