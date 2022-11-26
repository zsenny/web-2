import React, { useEffect, Fragment, useState} from 'react'
import '../css/CrearComic.css'
import ActionAreaCard from '../components/TarjetasCapcomic'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom"

import {GetComicById, ModifyComicById, DeleteComicById} from '../api/ComicAPI';


/* Botones */
const Input = styled('input')({
    display: 'none',
});
/* ComboBox */
const Generos = [
    { title: 'Romance' },
    { title: 'Accion' },
    { title: 'Aventuras' },
    { title: 'Vida Diaria' },
];
const Root = styled('div')(
    ({ theme }) => `
    color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0, .85)'
        };
    font-size: 1.25vw;
  `,
);

const Label = styled('label')`
    padding: 0 0 4px;
    line-height: 1.5;
    display: block;
  `;

const InputWrapper = styled('div')(
    ({ theme }) => `
    width: 40vw;
    border: 1px solid ${theme.palette.mode === 'dark' ? '#160526' : '#d9d9d9'};
    background-color: ${theme.palette.mode === 'dark' ? '#160526' : '#fff'};
    border-radius: 4px;
    padding: 1px;
    display: flex;
    flex-wrap: wrap;
  
    &:hover {
      border-color: ${theme.palette.mode === 'dark' ? '#240940' : '#240940'};
    }
  
    &.focused {
      border-color: ${theme.palette.mode === 'dark' ? '#240940' : '#240940'};
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  
    & input {
      background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
      color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
        };
      height: 30px;
      box-sizing: border-box;
      padding: 4px 6px;
      width: 0;
      min-width: 30px;
      flex-grow: 1;
      border: 0;
      margin: 0;
      outline: 0;
    }
  `,
);

function Tag(props) {
    const { label, onDelete, ...other } = props;
    return (
        <div {...other}>
            <span>{label}</span>
            <CloseIcon onClick={onDelete} />
        </div>
    );
}

Tag.propTypes = {
    label: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
    ({ theme }) => `
    display: flex;
    align-items: center;
    height: 24px;
    margin: 2px;
    line-height: 22px;
    background-color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#fafafa'
        };
    border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
    border-radius: 2px;
    box-sizing: content-box;
    padding: 0 4px 0 10px;
    outline: 0;
    overflow: hidden;
  
    &:focus {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
      background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    }
  
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  
    & svg {
      font-size: 12px;
      cursor: pointer;
      padding: 4px;
    }
  `,
);

const Listbox = styled('ul')(
    ({ theme }) => `
    width: 300px;
    margin: 2px 0 0;
    padding: 0;
    position: absolute;
    list-style: none;
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1;
  
    & li {
      padding: 5px 12px;
      display: flex;
  
      & span {
        flex-grow: 1;
      }
  
      & svg {
        color: transparent;
      }
    }
  
    & li[aria-selected='true'] {
      background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
      font-weight: 600;
  
      & svg {
        color: #1890ff;
      }
    }
  
    & li[data-focus='true'] {
      background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
      cursor: pointer;
  
      & svg {
        color: currentColor;
      }
    }
  `,
);


export default function EditarComic() {
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getTagProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
        value,
        focused,
        setAnchorEl,
    } = useAutocomplete({
        id: 'customized-hook-demo',
        defaultValue: [Generos[1]],
        multiple: true,
        options: Generos,
        getOptionLabel: (option) => option.title,
    });
    const [comic, setComic] = useState([]);
    useEffect(()=> {
        async function fetchData() {                       
            const comicRes = await GetComicById();
            setComic(comicRes);
        }

        fetchData();
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setComic({
            ...comic,
            [name]:value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Subir un ", comic);
        await ModifyComicById(comic);

    };

    const handleDelete = async (e) => {
        e.preventDefault();
        console.log("Eliminar un ", comic);
        await DeleteComicById();
    };


    return (
        <div class="Contenedor">
            <div class="imagenes">
                <div class="Perfil">
                    <img class="imgPerfil" src="https://pbs.twimg.com/media/FEAcm-jUcAAh5Cr?format=jpg&name=medium" alt="Imagen de perfil"></img>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                                Seleccionar
                            </Button>
                        </label>
                    </Stack>
                </div>

                <div class="Portada">
                    <img class="imgPortada" src="https://pbs.twimg.com/media/FEAcm-jUcAAh5Cr?format=jpg&name=medium" alt="Imagen de portada"></img>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <label class="JalaPoFavo" htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                                Seleccionar
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
                            label="Nombre"
                            defaultValue=" "
                            variant="standard"
                            value = {comic.titulo}
                            name = "titulo"
                            onChange = {handleChange}
                        />
                        <div>
                            <TextField
                                id="standard-multiline-static"
                                label="Descripción"
                                multiline
                                rows={4}
                                defaultValue=" "
                                variant="standard"
                            />
                        </div>
                        <Root>
                            <div {...getRootProps()}>
                                <Label {...getInputLabelProps()}>Generos</Label>
                                <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                                    {value.map((option, index) => (
                                        <StyledTag label={option.title} {...getTagProps({ index })} />
                                    ))}

                                    <input {...getInputProps()} />
                                </InputWrapper>
                            </div>
                            {groupedOptions.length > 0 ? (
                                <Listbox {...getListboxProps()}>
                                    {groupedOptions.map((option, index) => (
                                        <li {...getOptionProps({ option, index })}>
                                            <span>{option.title}</span>
                                            <CheckIcon fontSize="small" />
                                        </li>
                                    ))}
                                </Listbox>
                            ) : null}
                        </Root>
                    </div>
                </Box>
            </div>
            <div class="CapitulosEdit">
            <h4>{comic.titulo}</h4>
                <h3>Capitulos del comic:</h3>
                <ActionAreaCard
                    page="editarComic"
                    imagen="https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"
                    titulo="El regreso del sanwich maldito parte 1"
                    descripcion="Callado en la playa,
                        Te lloro en silencio otra vez,
                        Me ahoga esta pena">
                </ActionAreaCard>
            </div>
            <Stack direction="row">
                <div class="JalaPoFavo">
                    <Button variant="contained" color="success" id="guardarComic" onClick = {handleSubmit} component={Link} to="/Perfil">
                        Guardar nuevos datos
                    </Button>
                    <Button variant="outlined" color="error" id="Eliminarcomic" onClick ={handleDelete} component={Link} to="/Perfil">
                        Eliminar comic
                    </Button>
                </div>
            </Stack>

        </div>
    )
}
