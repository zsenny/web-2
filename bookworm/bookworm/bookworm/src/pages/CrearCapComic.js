import React, {useEffect, useState}from 'react'
import '../css/CrearCapComic.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom"


import { CreateCapituloComic } from '../api/CapituloAPI';

/* Galeria */

/* Botones */
const Input = styled('input')({
    display: 'none',
});

const defaultSrc ="https://pbs.twimg.com/media/FEAcm-jUcAAh5Cr?format=jpg&name=medium";

const toBase64 = (file) => new Promise(( res, rej)=>{
    const reader  = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = e=>{
        res(reader.result);
    };
});

const ImageCard = ({data, idx, onClickClose})=>{
    return(
        <ImageListItem>
            <img
                src     ={data.src}
                srcSet  ={data.src}
                alt={data.title}
                loading="lazy"
            />
            <ImageListItemBar
                title={data.title}
                actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={data.title}
                        onClick={()=>onClickClose(idx)}
                    >
                        <DeleteIcon />
                    </IconButton>
                }
            />
        </ImageListItem>
    );
};

export default function SubirCapComic() {
    const [capitulo, setCapitulo] = useState({
        idComic:"614000cbdaea07194602c6bd",
        nombreCapitulo:"",
        numCapitulo:1,
        imagen:"no",
        pagina:""
        //imagen:[] //como deberia de ser.
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setCapitulo({
            ...capitulo,
            [name]:value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Subir un ", capitulo);
        await CreateCapituloComic(capitulo);

    };

    const [preview, setPreview] = useState(defaultSrc);

    const onChangeImg = async e =>{
        console.log("aqui NO es");
        const src = await toBase64(e.target.files[0]);
        setPreview(src);
        capitulo.imagen = src
    };

    const [previewArr, setPreviewArr] = useState([]);

    const cambiarImagenes = async e =>{
        console.log("aqui si es");
        const promiseArr    = Array.from(e.target.files).map((src)=>toBase64(src));
        console.log(promiseArr);
        const base64s       = await Promise.all(promiseArr);

        const temp = [];

        for( let i = 0; i < base64s.length; i++ ){
            temp.push( { title: e.target.files[i].name, src: base64s[i]});
        }
        
        setPreviewArr([...previewArr, ...temp]);
        capitulo.pagina = base64s[0];
    };

    useEffect(()=>console.log(previewArr),[previewArr])

    const onClickClose = (idx)=>{
        const arr1 = previewArr.slice(0, idx);
        const arr2 = previewArr.slice(idx+1);
        setPreviewArr([...arr1, ...arr2]);
    };

    return (
        <div class="Contenedor">
            <div class="imagenes">
                <div class="Perfil">
                    <img class="imgPerfil" src={preview} name = 'imagen' value = {preview} alt="Imagen de perfil" ></img>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <label class="JalaPoFavo " htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onChangeImg}/>
                            <Button variant="contained" component="span" >
                                Miniatura
                            </Button>
                        </label>
                    </Stack>
                </div>
            </div>
            <div class="Datos">
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
                            required
                            id="standard-required"
                            label="Nombre del capitulo"
                            defaultValue=" "
                            variant="standard"
                            name ="nombreCapitulo"
                            value = {capitulo.nombreCapitulo} 
                            onChange = {handleChange}
                        />
                    </div>
                </Box>
            </div>
            <div class="ListaImagenes">
                <Stack direction="row" alignItems="center" spacing={2}>
                    <label class="JalaPoFavo" htmlFor="f">
                            <Input accept="image/*" id="f" multiple type="file" 
                                onChange={ cambiarImagenes }/>
                            <Button variant="contained" component="span" >
                                Seleccionar
                            </Button>
                    </label>
                </Stack>
                <ImageList >
                    <ImageListItem key="Subheader" cols={2}>
                    </ImageListItem>
                    {
                        previewArr.map((el, i)=><ImageCard key={i} idx={i} data={el} onClickClose={onClickClose}/>)
                    }
                </ImageList>
            </div>
            <Stack direction="row">
                <div class="JalaPoFavo">
                    <Button id="subirComic" variant="contained" color="success" onClick = {handleSubmit} component={Link} to="/Comic">
                        Subir capitulo
                    </Button>
                </div>
            </Stack>
        </div>
    )
}
