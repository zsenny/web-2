import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../css/tarjetas.css'
import {Link} from "react-router-dom";

export default function ActionAreaCard(props) {
  let toDir="/LeerComic";
  if(props.page==="pendientesAprobar"){
    toDir="/HistoriaARevisar";
  }
  if(props.page==="comicsReporte"){
    toDir="/ComicReportado";
  }
  if(props.page==="escondido"){
    toDir="/ComicEscondido";
  }
  return (
    <Card class="cardMod" sx={{ maxWidth: 345 }}>
      <CardActionArea component={Link} to={toDir}>
        <CardMedia
          class="IMGCard"
          component="img"
          image={props.imagen}
          alt="green iguana"
          
        />
        <CardContent
          class="ContentCard"
          >
          <Typography class="Title" gutterBottom variant="h5" component="div">
            {props.titulo}
          </Typography>
          <Typography class="Desc" variant="body2" color="text.secondary">
            {props.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}