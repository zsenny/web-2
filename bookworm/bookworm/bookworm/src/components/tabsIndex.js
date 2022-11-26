import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../css/tabs.css'
import ActionAreaCard from '../components/Tarjetas'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ maxWidth: '100vw', bgcolor: 'background.paper' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="basic tabs example">
                    <Tab label="Nuevas historias" {...a11yProps(0)} />
                    <Tab label="Más leídos" {...a11yProps(1)} />
                    <Tab label="Menos leídos" {...a11yProps(2)} />
                    <Tab label="Mejores valorados" {...a11yProps(3)} />
                    <Tab label="Menos valorados" {...a11yProps(4)} />
                    <Tab label="Actualizados" {...a11yProps(5)} />
                    <Tab label="Generos" {...a11yProps(6)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className='contenedorPrinc'>
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
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='contenedorPrinc'>
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
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className='contenedorPrinc'>
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
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className='contenedorPrinc'>
                    <div className='historias' >
                        <ActionAreaCard
                            imagen="https://pbs.twimg.com/media/FD5HWVGVgAAArGR?format=jpg&name=small"
                            titulo="10"
                            descripcion="Por que te extraño,
                        Desde aquel Noviembre,
                        Cuando sonamos juntos">
                        </ActionAreaCard>
                        <ActionAreaCard
                            imagen="https://i.ytimg.com/vi/3FPFVquCdgc/hqdefault.jpg"
                            titulo="11"
                            descripcion="A querernos siempre,
                        Me duele, este frio Noviembre,
                        Cuando las hojas caen">
                        </ActionAreaCard>
                        <ActionAreaCard
                            imagen="https://i.ytimg.com/vi/gN4LMXhdNVg/maxresdefault.jpg"
                            titulo="12"
                            descripcion="A morir por siempre,
                        Noviembre sin ti es sentir que la lluvia,
                        Me dice llorando que todo acabo">
                        </ActionAreaCard>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <div className='contenedorPrinc'>
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
                </div>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <div className='contenedorPrinc'>
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
                </div>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <a class="GenerosTab" href="/Genero">Accion</a>
                <a class="GenerosTab" href="/Genero">Aventura</a>
                <a class="GenerosTab" href="/Genero">Romance</a>
            </TabPanel>
        </Box>
    );
}