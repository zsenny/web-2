import React from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


import '../css/iniciarSesion.css'

export default function IniciarSesion() {
    return (
        <div class="ContenedorIniciarSesion">
             <div class="SegundoContenedorIS">
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
                            label="Correo"
                            defaultValue=" "
                            variant="standard"
                        />
                        <TextField
                            id="standard-password-input"
                            label="Contraseña"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                    </div>
                </Box>
                <Stack direction="row">
                        <div class="JalaPoFavo iniciarSesionBtn">
                            <Button variant="contained" color="success">
                                Iniciar Sesion
                            </Button>
                        </div>
                    </Stack>
            </div>
        </div>
    )
}
