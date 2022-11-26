import React, { useEffect, Fragment, useState} from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import '../css/registrarse.css'
import {CreateUsuario} from "../api/UsuarioAPI"

export default function Registrarse() {
    const [usuario, setUsuario] = useState({
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
        await CreateUsuario(usuario);

    };

    
    return (
        <div class="ContenedorRegistrarse">
             <div class="SegundoContenedorRegistrarse">
                <Box id="CajaDeDatos"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50vw' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="Nombre de Usuario"
                            defaultValue="Hello World"
                            variant="standard"
                            value = {usuario.nombre}
                            name = "nombre"
                            onChange = {handleChange}
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="Apodo"
                            defaultValue="Hello World"
                            variant="standard"
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="Correo"
                            defaultValue="Hello World"
                            variant="standard"
                            value = {usuario.correo}
                            name = "correo"
                            onChange = {handleChange}
                        />
                        <TextField
                            id="standard-password-input"
                            label="Contraseña"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            value = {usuario.contrasena}
                            name = "contrasena"
                            onChange = {handleChange}
                        />
                    </div>
                </Box>
                <Stack direction="row">
                        <div class="JalaPoFavo registrarse">
                            <Button variant="contained" color="success" onClick = {handleSubmit}>
                                Registrarse
                            </Button>
                        </div>
                    </Stack>
            </div>
        </div>
    )
}
