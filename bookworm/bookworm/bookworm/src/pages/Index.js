import React, { useEffect, Fragment, useState } from 'react'

import {GetAll} from '../api/ComicAPI';

import Tabs from '../components/tabsIndex'
//import BasicRating from '../components/Calificacion'
import Slide from '../components/Slide'
import '../css/index.css'
import ActionAreaCard from '../components/Tarjetas'



const Index = () => {
    const [comics, setComics] = useState([]);
    useEffect(()=> {
        async function fetchData() {
            //const token = await getTokenSilently(); 
            //const schoolRes = await GetAll(token);                             
            const comicRes = await GetAll();
            setComics(comicRes);
        }

        fetchData();
    }, []);
    return (
        <Fragment>
            <Slide></Slide>
            <Tabs></Tabs>
            
            {comics.map((item, index)=> (
                <ActionAreaCard key = {item.id}
                imagen="https://pbs.twimg.com/media/FD_DEkCakAANufi?format=jpg&name=4096x4096"
                titulo={item.titulo}
                 descripcion="Cuando sonamos juntos,
                A querernos siempre,
                Me duele, este frio Noviembre">
            </ActionAreaCard>
            ))}
            
        </Fragment>
    )
}

export default Index