import React, { useEffect, Fragment, useState } from 'react'

import '../css/LeerComic.css'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import {GetAllReportesComentarios} from '../api/ReporteComentarioAPI';

export default function ComentariosReportados() {
    const [reporteComentario, setReporteComentatio] = useState([]);
    useEffect(()=> {
        async function fetchData() {
            //const token = await getTokenSilently(); 
            //const schoolRes = await GetAll(token);                             
            const reporteComentarioRes = await GetAllReportesComentarios();
            setReporteComentatio(reporteComentarioRes);
        }

        fetchData();
    }, []);

    return (
        <div class="ComentariosReportados">
            <p class="TitulosNoCards">Comentarios reportados</p>
            <div >
                <div class="Comentario">
                    <h1 class="TituloComicReporteComentario">Titulo del comic</h1>
                    <h2 class="CapituloComicReporteComentario">Capitulo del comic</h2>
                    <h3 class="NombrePersonaComentariosReporte">Nombre de la persona aquí</h3>
                    <p class="TextoPersonaComentario">Mensaje de la persona aquí</p>
                    <p class="ReporteComentario">El reporte va aquí</p>
                    <Button variant="contained" color="success">
                        Eliminar reporte
                    </Button>
                    <div class="EscribirComentario">
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
                            id="filled-multiline-static"
                            label="Si es necesario, enviar mensaje de advertencia"
                            multiline
                            rows={3}
                            defaultValue=" "
                            variant="filled"
                        />
                    </div>
                </Box>
                <div class="BtnEnviarComentario">
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>

                </div>

            </div>
                </div> <div class="Comentario">
                    <h1 class="TituloComicReporteComentario">Titulo del comic</h1>
                    <h2 class="CapituloComicReporteComentario">Capitulo del comic</h2>
                    <h3 class="NombrePersonaComentariosReporte">Nombre de la persona aquí</h3>
                    <p class="TextoPersonaComentario">Mensaje de la persona aquí</p>
                    <p class="ReporteComentario">El reporte va aquí</p>
                    <Button variant="contained" color="success">
                        Eliminar reporte
                    </Button>
                    <div class="EscribirComentario">
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
                            id="filled-multiline-static"
                            label="Si es necesario, enviar mensaje de advertencia"
                            multiline
                            rows={3}
                            defaultValue=" "
                            variant="filled"
                        />
                    </div>
                </Box>
                <div class="BtnEnviarComentario">
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>

                </div>

            </div>
                </div>
                {reporteComentario.map((item, index)=> (
                    <div class="Comentario">
                    <h1 class="TituloComicReporteComentario">Titulo del comic</h1>
                    <h2 class="CapituloComicReporteComentario">Capitulo del comic</h2>
                    <h3 class="NombrePersonaComentariosReporte">Nombre de la persona aquí</h3>
                    <p class="TextoPersonaComentario">Mensaje de la persona aquí</p>
                    <p class="ReporteComentario">{item.contenido}</p>
                    <Button variant="contained" color="success">
                        Eliminar reporte
                    </Button>
                    <div class="EscribirComentario">
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
                            id="filled-multiline-static"
                            label="Si es necesario, enviar mensaje de advertencia"
                            multiline
                            rows={3}
                            defaultValue=" "
                            variant="filled"
                        />
                    </div>
                </Box>
                <div class="BtnEnviarComentario">
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>

                </div>

            </div>
                </div>
            ))}
            </div>
        </div>
    )
}
