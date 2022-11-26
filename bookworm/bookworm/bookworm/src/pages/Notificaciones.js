import React, {useEffect, useState}  from 'react'
import SimplePaper from '../components/CuadrosNotificaciones'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { GetNotificacionById, PostNotificacion } from '../api/NotificacionAPI';

export default function Notificaciones() {

    const [notificacion, setNotificacion] = useState([]);
    useEffect(()=> {
        async function fetchData() {                       
            const notificacionRes = await GetNotificacionById();
            setNotificacion(notificacionRes);
        }

        fetchData();
    }, []);

    // const [notificacion, setNotificacion] = useState({
    //     idUsuario:"613f0802d3fee5546d011eb6",
    //     tipoNotificacion:'ACTUALIZACION',
    //     contenido:"Bienvenido a las notifiaciones!"
    // });

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log("Subido", notificacion);
    //     await PostNotificacion(notificacion);
    //     console.log("jjejejeje")
    //     //alert.success('Se escuela fue creada con exito');
    // };

//     {notificacion.map((item, index)=> (
//         <Box
//         sx={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             '& > :not(style)': {
//             m: 1,
//             width: 128,
//             height: 128,
//             },
//         }}
//         >
//         <Paper elevation={3}>item.notificacion</Paper> 
//     </Box>
//    ))}

    return (
        <div>
            
            <SimplePaper></SimplePaper>
            <SimplePaper></SimplePaper>
            <SimplePaper></SimplePaper>

            <Box
                 sx={{
                     display: 'flex',
                     flexWrap: 'wrap',
                     '& > :not(style)': {
                     m: 1,
                     width: 128,
                     height: 128,
                     },
                 }}
                 >
                 <Paper elevation={3}>{notificacion.contenido}</Paper> 
             </Box>



           

        </div>
    )
}
