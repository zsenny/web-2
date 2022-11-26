import React, {useEffect,useState} from 'react'
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

import {GetCapituloComicById, ModifyCapituloComicById, DeleteCapituloComicById} from '../api/CapituloAPI';

/* Galeria */
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
];
/* Botones */
const Input = styled('input')({
    display: 'none',
});

const defaultSrc = "https://pbs.twimg.com/media/FEAcm-jUcAAh5Cr?format=jpg&name=medium";

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

export default function EditarCapComic() {
    const [capitulo, setCapitulo] = useState([]);
    useEffect(()=> {
        async function fetchData() {                       
            const capituloRes = await GetCapituloComicById();
            setCapitulo(capituloRes);
            //const src = await toBase64(capitulo.imagen);
            console.log(capitulo);
            const buff = Buffer.from(capitulo.imagen, "base64");
            const imag = buff.toString("utf8");
            //await setPreview(capitulo.imagen);
            await setPreview(imag);
        }
        
        fetchData();
    }, []);

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
        await ModifyCapituloComicById(capitulo);

    };

    const handleDelete = async (e) => {
        e.preventDefault();
        console.log("Borrar un ", capitulo);
        await DeleteCapituloComicById();
    };

    

    const [preview, setPreview] = useState(defaultSrc);

    const onChangeImg = async e =>{
        const src = await toBase64(e.target.files[0]);
        setPreview(src);
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
                    <img class="imgPerfil" src={preview} alt="Imagen de perfil"></img>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <label class="JalaPoFavo " htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onChangeImg}/>
                            <Button variant="contained" component="span">
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
                            value = {capitulo.nombreCapitulo}
                            name = "nombreCapitulo"
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
                    <h4>{capitulo.nombreCapitulo}</h4>
                    <Button id="guardaCambios" variant="contained" color="success" onClick = {handleSubmit}component={Link} to="/EditarComic">
                        Guardar nuevos datos
                    </Button>
                    <Button id="EliminarCap" variant="outlined" color="error" onClick = {handleDelete} component={Link} to="/EditarComic">
                        Eliminar capitulo
                    </Button>
                </div>
            </Stack>
        </div>
    )
}
