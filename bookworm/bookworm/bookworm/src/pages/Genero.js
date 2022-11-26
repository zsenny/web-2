import React,  { useEffect, Fragment, useState } from 'react'

import ActionAreaCard from '../components/Tarjetas'


import {GetAllGeneros} from '../api/GeneroAPI';


export default function Genero() {
    const [genero, setGenero] = useState([]);
    useEffect(()=> {
        async function fetchData() {
            //const token = await getTokenSilently(); 
            //const schoolRes = await GetAll(token);                             
            const generoRes = await GetAllGeneros();
            setGenero(generoRes);
        }

        fetchData();
    }, []);

    return (
        <div>
            <p class="TitulosNoCards">Nombre del genero</p>
            <div className='historias' >
                <ActionAreaCard
                    imagen="https://pbs.twimg.com/media/E9vwPTbX0AE3r0I?format=jpg&name=large"
                    titulo="01"
                    descripcion="La tarde se aleja,
                        El cielo esta gris,
                        La noche aparece sin ti">
                </ActionAreaCard>
                <ActionAreaCard
                    imagen="https://t2.uc.ltmcdn.com/images/7/8/2/como_cuidar_un_conejo_domestico_7287_orig.jpg"
                    titulo="02"
                    descripcion="Callado en la playa,
                        Te lloro en silencio otra vez,
                        Me ahoga esta pena">
                </ActionAreaCard>
                <ActionAreaCard
                    imagen="https://pbs.twimg.com/media/FEAcm-hVcAECIit?format=jpg&name=large"
                    titulo="03"
                    descripcion="No puedo vivir,
                        Las olas no me hablan de ti,
                        Sentado en la arena">
                </ActionAreaCard>
            </div>
            <div className='historias' >
                <ActionAreaCard
                    imagen="https://pbs.twimg.com/media/FD_DEkEaAAIOfLZ?format=jpg&name=4096x4096"
                    titulo="04"
                    descripcion="Escribo tu nombre otra vez,
                        Por que te extraño,
                        Desde aquel Noviembre">
                </ActionAreaCard>
                <ActionAreaCard
                    imagen="https://pbs.twimg.com/media/FD_DEkCakAANufi?format=jpg&name=4096x4096"
                    titulo="05"
                    descripcion="Cuando sonamos juntos,
                        A querernos siempre,
                        Me duele, este frio Noviembre">
                </ActionAreaCard>
                <ActionAreaCard
                    imagen="https://pbs.twimg.com/media/FD5HVYAUYAAs2Up?format=jpg&name=medium"
                    titulo="06"
                    descripcion="Cuando las hojas caen,
                        A morir por siempre,
                        Noviembre sin ti es sentir que la lluvia">
                </ActionAreaCard>
            </div>
            <div className='historias' >
                <ActionAreaCard
                    imagen="https://pbs.twimg.com/media/FD_DEkEaAAIOfLZ?format=jpg&name=4096x4096"
                    titulo="04"
                    descripcion="Escribo tu nombre otra vez,
                        Por que te extraño,
                        Desde aquel Noviembre">
                </ActionAreaCard>
                <ActionAreaCard
                    imagen="https://pbs.twimg.com/media/FD_DEkCakAANufi?format=jpg&name=4096x4096"
                    titulo="05"
                    descripcion="Cuando sonamos juntos,
                        A querernos siempre,
                        Me duele, este frio Noviembre">
                </ActionAreaCard>
                <ActionAreaCard
                    imagen="https://pbs.twimg.com/media/FD5HVYAUYAAs2Up?format=jpg&name=medium"
                    titulo="06"
                    descripcion="Cuando las hojas caen,
                        A morir por siempre,
                        Noviembre sin ti es sentir que la lluvia">
                </ActionAreaCard>
                {genero.map((item, index)=> (
                <ActionAreaCard key = {item.id}
                imagen="https://pbs.twimg.com/media/FD_DEkCakAANufi?format=jpg&name=4096x4096"
                titulo={item.nombre}
                 descripcion="Cuando sonamos juntos,
                A querernos siempre,
                Me duele, este frio Noviembre">
                </ActionAreaCard>
                 ))}
            </div>
        </div>
    )
}
