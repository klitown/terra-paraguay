import { Container } from '@mui/material';
import Grid from '@mui/material/Grid'
import PlaceCard from 'src/views/dashboard/PlaceCard';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';

// Firebase
import { collection, getDocs } from 'firebase/firestore';
import { app, database } from '../../../firebaseConfig';
// database itself
const dbInstance = collection(database, 'lugares');

const departamentos = [
    { label: 'Concepción', id: 1 },
    { label: 'San Pedro	', id: 2 },
    { label: 'Cordillera', id: 3 },
    { label: 'Guairá', id: 4 },
    { label: 'Caaguazú', id: 5 },
    { label: 'Caazapá', id: 6 },
    { label: 'Itapúa', id: 7 },
    { label: 'Misiones', id: 8 },
    { label: 'Paraguarí', id: 9 },
    { label: 'Alto Paraná', id: 10 },
    { label: 'Central', id: 11 },
    { label: 'Ñeembucú', id: 12 },
    { label: 'Amambay', id: 13 },
    { label: 'Canindeyú', id: 14 },
    { label: 'Presidente Hayes	', id: 15 },
    { label: 'Boquerón', id: 16 },
    { label: 'Alto Paraguay	', id: 17 },
];

const Lugar = () => {

    const [places, setPlaces] = useState<any[]>([]);

    const getPlaces = () => {
        getDocs(dbInstance)
            .then((data) => {
                setPlaces(data.docs.map((item) => {
                    return { ...item.data(), id: item.id }
                }));
            })
    }

    useEffect(() => {
        getPlaces();
    }, [])

    return (

        <>
            <Container maxWidth="xl">

                <Grid item xs={12} md={12}>
                    <aside style={{
                        background: `url(https://images.pexels.com/photos/301489/pexels-photo-301489.jpeg) center / cover`,
                    }}
                        className="overflow-hidden bg-center bg-no-repeat bg-cover rounded-3xl"
                    >
                        <div className="flex justify-center p-8 md:p-12 lg:px-16 lg:py-24 bg-green-900/25 ">
                            <div className="max-w-xl text-center sm:text-left bg-white p-4 rounded-3xl">
                                <h2 className="text-4xl font-extrabold text-black sm:text-3xl md:text-5xl tracking-wider">
                                    Tenemos todos estos lugares para vos.
                                </h2>
                            </div>
                        </div>
                    </aside>



                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                    <div className="flex mt-14 mb-8">
                        <h3 className='text-4xl font-bold border-b-4 border-green-500'>
                            Mostrando todos los lugares
                        </h3>
                    </div>
                    <p className='font-bold mb-3'>Filtros sugeridos:</p>
                    <div className="flex items-center flex-wrap mb-10 space-x-4 space-y-4">
                        <div>
                            <Autocomplete
                                disablePortal
                                size='small'
                                id="combo-box-demo"
                                options={departamentos}
                                sx={{ width: 300 }}
                                className='h-3 mb-6 md:mb-0'
                                renderInput={(params) => <TextField {...params} label="Departamento" />}
                            />
                        </div>
                        <div className="cursor-pointer hover:bg-green-500 w-20 font-bold border border-black-500 text-black border-green-500 uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                            Cerro
                        </div>
                        <div className="cursor-pointer hover:bg-orange-500 w-20 font-bold border border-orange-500 text-black uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                            Hotel
                        </div>
                        <div className="cursor-pointer hover:bg-lime-800 w-20 font-bold border border-lime-800 text-black uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                            Granja
                        </div>
                        <div className="cursor-pointer hover:bg-cyan-500 w-20 font-bold border border-cyan-500	text-black	uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                            Cabaña
                        </div>
                    </div>

                    <div className='h-[3px] mt-4 mb-10'></div>

                    <Grid container spacing={6}>
                        {
                            places.map((lugar) =>
                                <Grid item xs={12} md={4} lg={3} key={lugar.id}>
                                    <PlaceCard {...lugar} />
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Lugar
