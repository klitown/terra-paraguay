import { useEffect, useState } from 'react';
import Link from "next/link";

// ** MUI Imports **
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material';

import PlaceCard from 'src/views/dashboard/PlaceCard';

// Firebase
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../firebaseConfig';

// database itself
const dbInstance = collection(database, 'lugares');

import Image from 'next/image';

const Dashboard = () => {

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
    <Container maxWidth="xl">
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <aside style={{
            background: `url('/images/nature/home-image.jpg') center / cover`,
          }}
            className="overflow-hidden bg-center bg-no-repeat bg-cover rounded-3xl"
          >
            <div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-green-900/25 ">
              <div className="max-w-lg text-center sm:text-left bg-white p-4 rounded-3xl">
                <h2 className="text-4xl font-extrabold text-black sm:text-3xl md:text-5xl tracking-wider">
                  Planificá tu viaje, sin mucha vuelta.
                </h2>

                <p
                  className="hidden max-w-md text-green-600 md:mt-6 md:text-xl md:leading-relaxed md:block font-bold"
                >
                  Buscá el destino que mejor te parezca. Armá tu ruta. Viajá.
                  Así de simple.
                </p>


              </div>
            </div>
          </aside>



        </Grid>


        <Grid item xs={12} md={12}>
          <section className="bg-white">
            <div className="px-4 py-12 mx-auto max-w-screen-xl md:py-16 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Una idea por y para aventureros 🚀
                </h2>

                <p className="mt-4 text-gray-500 sm:text-xl">
                  Pensada para gente que busca lugares por descubrir, queremos llegar hasta el último rincón del país
                </p>
              </div>

              <div className="max-w-3xl mx-auto text-center mt-5">
                <Image
                  className='rounded-3xl'
                  src="/images/terra_logo.jpg"
                  width={200}
                  height={200}
                  alt="Terra logo"
                />
              </div>

              <div className="mt-8 sm:mt-12">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">


                  <div
                    className="flex flex-col px-4 py-8 text-center border border-gray-300 rounded-lg"
                  >
                    <dt className="order-last text-lg font-medium text-gray-500">
                      País
                    </dt>

                    <dd className="text-4xl font-extrabold text-green-500 md:text-5xl">
                      1
                    </dd>
                  </div>

                  <div
                    className="flex flex-col px-4 py-8 text-center border border-gray-300 rounded-lg"
                  >
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Departamentos
                    </dt>

                    <dd className="text-4xl font-extrabold text-green-500 md:text-5xl">17</dd>
                  </div>

                  <div
                    className="flex flex-col px-4 py-8 text-center border border-gray-300 rounded-lg"
                  >
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Aventuras
                    </dt>

                    <dd className="text-4xl font-extrabold text-green-500 md:text-5xl">1000</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>




        </Grid>

        <Grid item xs={12} md={12} lg={12}>

          <div className="flex flex-col md:flex-row justify-between my-14">
            <h3 className='text-4xl font-bold border-b-4 border-green-500'>
              Destinos más populares
            </h3>
            <Link href="/lugares">
              <a className="mt-5 md:mt-0 relative inline-block px-8 py-3 overflow-hidden border border-green-600 group focus:outline-none focus:ring">
                <span className="absolute inset-y-0 left-0 w-[2px] transition-all bg-green-600 group-hover:w-full group-active:bg-green-500"></span>

                <span className="relative text-lg font-medium text-black transition-colors group-hover:text-white">
                  Ver todos los lugares
                </span>
              </a>
            </Link>
          </div>

          <Grid container spacing={6}>
            {
              places.map((lugar) =>
                <Grid item xs={12} md={4} lg={4} xl={3} key={lugar.id}>
                  <PlaceCard  {...lugar} />
                </Grid>
              )
            }
          </Grid>
        </Grid>


      </Grid>
    </Container>
  )
}

export default Dashboard
