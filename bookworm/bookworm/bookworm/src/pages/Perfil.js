import ActionAreaCard from '../components/Tarjetas'
import '../css/perfil.css'
import React, { useEffect, useState } from 'react'

import {GetUsuarioById} from '../api/UsuarioAPI';

export default function HistoriasSubidas() {
    const [usuario, setUsuario] = useState([]);
    useEffect(()=> {
        async function fetchData() {                       
            const usuarioRes = await GetUsuarioById();
            setUsuario(usuarioRes);
        }

        fetchData();
    }, []);

    return (
        <div className='contenedorPrinc'>
            <div class="ContenedorPerfil">
                <div class="centrar">
                    <div class="imagen">
                        <img class="imgPerfilPerfil" src="http://pm1.narvii.com/6206/1bd213a3214c1d52b9eb657d6f09ed823bc84984_00.jpg" alt="Imagen de perfil"></img>
                    </div>
                    <div class="DatosPerfil">
                        <h1>{usuario.nombre}</h1>
                        <h2>Sobre mi</h2>
                        <p class="desc"> Acnologia es un dragón enorme, más grande que el maestro Makarov en su forma de Titan. En toda su parte superior del cuerpo, está cubierto de escamas negras y redondas, que a su vez están decoradas por escamas con forma en espiral, de color azul. Su parte inferior del cuerpo, específicamente su vientre, la cola interna y las piernas, es de color gris, y parece ser bastante suave. Posee una cabeza roma y redondeada con cuatro cuernos grandes y alargados que se extienden hacia atrás, y tiene ojos pequeños y brillantes blancos. Su boca está llena de dientes afilados, y por debajo una protuberancia alargada hacia abajo. Tiene unas enormes alas con placas que cubren todo su cuerpo, adquiriendo una formación que recuerda a las plumas de un pájaro. Su gran cola se divide en dos en su extremo, donde las placas negras desaparecen, y asume un doble aguijón como aspecto.</p>
                    </div>
                </div>
            </div>
            <p class="Titulos">Mis historias</p>
            <div class="MisHistorias">
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
                        imagen="https://pbs.twimg.com/media/FEAcm-jUcAAh5Cr?format=jpg&name=medium"
                        titulo="07"
                        descripcion="Me dice llorando que todo acabo,
         Noviembre sin ti es pedirle a la luna,
         Que brille en la noche de mi corazón">
                    </ActionAreaCard>
                    <ActionAreaCard
                        imagen="https://pbs.twimg.com/media/FD5HV3MVcAEjHRq?format=jpg&name=900x900"
                        titulo="08"
                        descripcion="Otra vez, otra vez,
        Quisiera decirte,
        Que quiero volver">
                    </ActionAreaCard>
                    <ActionAreaCard
                        imagen="https://pbs.twimg.com/media/FD_TpSBaUAAWiyt?format=png&name=900x900"
                        titulo="09"
                        descripcion="Tu nombre va escrito en mi piel,
        Ya es de madrugada,
        Te sigo esperando otra vez">
                    </ActionAreaCard>
                </div>
            </div>
        </div>
    )
}
