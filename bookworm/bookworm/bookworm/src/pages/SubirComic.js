import React from 'react'
import ComboBox from '../components/ComboBox'
import '../css/subircomic.css'
import Button from '@mui/material/Button';

export default function SubirComic() {
    return (
        <div class="contenedorSubirComic">
            <div class="contenedorImagenesSubirComic">
                <Button variant="contained" href="#contained-buttons">
                    Seleccionar imagen de portada
                </Button> <Button variant="contained" href="#contained-buttons">
                    Seleccionar imagen para banner
                </Button>
            </div>
            <div class="contenedorComboBoxSubirComic">
                <ComboBox></ComboBox>
                <ComboBox></ComboBox>
            </div>
            <div class="contenedor01">
                <label class="Labels">Titulo</label>
                <input class="texto-SubirComic" type='text'></input>
                <label class="Labels">Descripcion</label>
                <textarea class="texto-SubirComic"></textarea>
                <Button id="Succ" variant="contained" color="success">Success</Button>
            </div>

        </div>
    )
}
