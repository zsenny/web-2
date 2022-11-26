import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../css/tarjetasCapcomic.css'
import {Link} from "react-router-dom";

export default function TarjetasCapcomic(props) {

    let toDir="/LeerComic";
    if(props.page==="editarComic"){
        toDir="/EditarCapitulo";
    }
    
   
    return (
        <div>
            <Card class="cardModComic" sx={{ maxWidth: 500 }}>
                <CardActionArea component={Link} to={toDir}>
                    <CardMedia
                        class="IMGCardComic"
                        component="img"
                        image={props.imagen}
                        alt="green iguana"
                    />
                    <CardContent
                        class="ContentCardComic"
                    >
                        <Typography class="TituloCap" gutterBottom variant="h5" component="div">
                            {props.titulo}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
