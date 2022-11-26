import React, { useEffect, Fragment, useState} from 'react'
import '../css/Comic.css'
import '../css/LeerComic.css'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

import {Link} from "react-router-dom"

import {GetComicById} from '../api/ComicAPI';

export default function HistoriaARevisar() {
    const [comic, setComic] = useState([]);
    useEffect(()=> {
        async function fetchData() {                       
            const comicRes = await GetComicById();
            setComic(comicRes);
        }

        fetchData();
    }, []);

    return (
        <div>
            <img class="imgPortadaComic" src="https://pbs.twimg.com/media/FEAcm-jUcAAh5Cr?format=jpg&name=medium" alt="Imagen de portada"></img>
            <div class="ContenedorInformacionComic">
                <div class="IzquierdoComicRevisiones">
                    <div class="ImagenComic">
                        <img class="imgPerfilComic" src="https://pbs.twimg.com/media/FEAcm-jUcAAh5Cr?format=jpg&name=medium" alt="Imagen de perfil"></img>
                    </div>
                </div>
                <div class="DerechoComic">
                    <h1 class="text-ag">{comic.titulo}</h1>
                    <h2 class="text-ag">Autor</h2>
                    <p class="desc text-ag"> Acnologia es un dragón enorme,
                        más grande que el maestro Makarov en su forma de Titan.
                        En toda su parte superior del cuerpo, está cubierto de escamas negras y redondas,
                        que a su vez están decoradas por escamas con forma en espiral, de color azul.
                        Su parte inferior del cuerpo, específicamente su vientre, la cola interna y las piernas,
                        es de color gris, y parece ser bastante suave. Posee una cabeza roma y
                        redondeada con cuatro cuernos grandes y alargados que se extienden hacia atrás,
                        y tiene ojos pequeños y brillantes blancos. Su boca está llena de dientes afilados,
                        y por debajo una protuberancia alargada hacia abajo. Tiene unas enormes alas con placas
                        que cubren todo su cuerpo, adquiriendo una formación que recuerda a las plumas de un pájaro.
                        Su gran cola se divide en dos en su extremo,
                        donde las placas negras desaparecen, y asume un doble aguijón como aspecto.
                    </p>
                    <div class="Generos">
                        <p class="Genero text-ag">Accion</p>
                        <p class="Genero text-ag">Aventura</p>
                    </div>
                    <Stack direction="row">
                        <div class="JalaPoFavo">
                            <Button variant="contained" color="success" id="aprobar" component={Link} to="/HistoriasPendientesDeAprobar">
                                Aprobar comic
                            </Button>
                        </div>
                    </Stack>
                </div>
            </div>
            <div class="Division"></div>
            <div class="ComentariosModerador">
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
                                label="Envia mensaje al creador para poder aceptar la historia"
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
                    <h3>Comentarios de moderadores</h3>

                </div>
                <div class="Comentario">
                    <h3 class="NombrePersonaComentarios">Nombre de la persona aquí</h3>
                    <p class="TextoPersonaComentario">Mensaje de la persona aquí</p>
                </div> <div class="Comentario">
                    <h3 class="NombrePersonaComentarios">Aiuda</h3>
                    <p class="TextoPersonaComentario">Trato de salvar el semeste</p>
                </div>
            </div>
        </div>
    )
}
