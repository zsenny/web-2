import React, { useEffect, Fragment, useState} from 'react'
import '../css/Comic.css'
import ActionAreaCard from '../components/TarjetasCapcomic'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import {Link} from "react-router-dom"

import {GetComicById} from '../api/ComicAPI';


const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

export default function ComicEsp() {
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
                <div class="IzquierdoComic">
                    <div class="MostrarCalif">
                        <FavoriteBorderIcon color="secondary" id="corazon" />
                        <p class="Calificacion">10</p>
                    </div>
                    <div class="ImagenComic">
                        <img class="imgPerfilComic" src="https://pbs.twimg.com/media/FEAcm-jUcAAh5Cr?format=jpg&name=medium" alt="Imagen de perfil"></img>
                    </div>
                    <Box class="Rating"
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <StyledRating
                            name="customized-color"
                            defaultValue={5}
                            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                            precision={0.5}
                            icon={<FavoriteIcon fontSize="inherit" />}
                            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        />
                    </Box>
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
                    <Stack direction="row" spacing={1}>
                        <Button variant="outlined" color="error">
                            Reportar
                        </Button>
                        
                    </Stack>
                    <Stack id="botonesCreador" direction="row" spacing={1} >
                        <Button id="btnEditar" variant="contained" component={Link} to="/EditarComic">
                            Editar
                        </Button>
                        <Button id="btnCrearCap" variant="contained" component={Link} to="/CrearCapComic">
                            Crear capitulo
                        </Button>
                    </Stack>
                    
                </div>
            </div>
            <div class="Division"></div>
            <div class="Capitulos">
            <ActionAreaCard
                    page="Comic"
                    imagen="https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"
                    titulo="El regreso del sanwich maldito parte 1"
                    descripcion="Callado en la playa,
                        Te lloro en silencio otra vez,
                        Me ahoga esta pena">
                </ActionAreaCard>
            </div>

        </div>
    )
}
