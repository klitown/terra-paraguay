import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "@mui/material"
import { database } from '../../../firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import Link from "next/link";
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://dcom-prod.imgix.net/files/inline-images/1%20baja.jpg',
        thumbnail: 'https://dcom-prod.imgix.net/files/inline-images/1%20baja.jpg',
    },
    {
        original: 'https://www.nippon.com/es/ncommon/contents/features/108158/108158.jpg',
        thumbnail: 'https://www.nippon.com/es/ncommon/contents/features/108158/108158.jpg',
    },
    {
        original: 'https://podcast.duolingo.com/images/spanish/Episode%2062.jpeg',
        thumbnail: 'https://podcast.duolingo.com/images/spanish/Episode%2062.jpeg',
    },
];

const DetalleLugar: FunctionComponent<any> = () => {

    const router = useRouter();
    const routerData = router.query.id; // get the id from the link!
    const idFirebasePlace: any = routerData;

    const [place, setPlace] = useState<any>();

    const getPlace = async () => {
        if (idFirebasePlace) {
            const snap = await getDoc(doc(database, 'lugares', idFirebasePlace))
            if (snap.exists()) {
                console.log(snap.data())
                setPlace(snap.data())
            }
            else {
                console.log("No such document")
            }
        }
    }

    useEffect(() => {
        getPlace();
    }, [idFirebasePlace])

    if (!place) return <h1>No place</h1>

    return (
        <>
            <div className="flex flex-col">

                <div className='text-center bg-gradient-to-r from-[#31752C] via-[#90A955] to-[#31752C] p-5 rounded-3xl font-arvo'>
                    <h2 className="text-5xl text-white font-extrabold">{place.nombre}</h2>
                </div>

                <div className="flex items-center my-7">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="flex items-center text-md text-gray-500 space-x-1">
                            <li>
                                <Link href='/'>
                                    <a className="block transition-colors hover:text-gray-700"> Inicio </a>
                                </Link>

                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </li>

                            <li>
                                <a className="block transition-colors hover:text-gray-700"> Detalles del lugar </a>
                            </li>

                        </ol>
                    </nav>

                </div>

                <Card>

                    {/* GALLERY IMAGES */}
                    <div className="container">
                        <ImageGallery items={images} autoPlay={true} showPlayButton={false} useBrowserFullscreen={false} />
                    </div>


                    {/* SEPARATOR */}
                    {/* <div className="my-5 border-2 border-green-300"></div> */}



                    <div className="flex flex-col md:flex-row">
                        <div className="basis-1/2 flex-col">

                            <div className="text-center text-3xl font-mono font-bold bg-gradient-to-r from-[#31752C] via-[#90A955] to-[#31752C] text-white p-2 font-arvo">
                                <h1>Acerca del lugar</h1>
                            </div>

                            <div className="p-12">
                                <p>
                                    {place.descripcion}
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row mb-10 space-x-0 md:space-x-10 justify-center ml-12 md:ml-0">
                                <div className="text-lg font-black">????  {place.departamento}</div>
                                <div className="text-lg font-black">????  Riesgo medio</div>
                                <div className="text-lg font-black">????  Lugar para acampar</div>
                            </div>

                        </div>

                        <div className="basis-1/2">
                            <iframe className="w-full" width="600" height="450" style={{ border: 0 }} loading="lazy"
                                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJK7cieH2nXZQRF4KZj8gx18g&key=..."></iframe>
                        </div>

                    </div>


                </Card>
            </div>

            <Card className="mt-10 p-12 rounded-3xl">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="basis-1/2 grid place-items-center mb-7 md:mb-0 bg-gradient-to-r from-[#31752C] via-[#90A955] to-[#31752C] mx-10 p-2 rounded-2xl">
                        <h1 className="text-3xl text-white font-mono font-bold font-arvo">C??mo llegar</h1>
                    </div>
                    <div className="basis-1/2">
                        <p>
                            Omni Orlando Resort at ChampionsGate se encuentra en el ??rea de Four Corners en Kissimmee, en las afueras y cerca del aeropuerto.
                            Aquellos que quieran ir de compras pueden visitar Complejo de entretenimiento Old Town, mientras que quienes deseen conocer los puntos de inter??s m??s populares de la zona pueden ir a Parque tem??tico Disney's Animal Kingdom?? y Epcot??.
                            ??Viajas con ni??os? No te pierdas Walt Disney World??, o asiste a un evento o partido en Complejo ESPN Wide World of Sports.
                            Encontrar??s muchas opciones para disfrutar del aire libre con actividades como tours ecol??gicos.
                        </p>
                    </div>
                </div>
            </Card>

            <Card className="mt-10 p-12 rounded-3xl">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="basis-1/2 grid place-items-center mb-7 md:mb-0 bg-gradient-to-r from-[#31752C] via-[#90A955] to-[#31752C] mx-10 p-2 rounded-2xl">
                        <h1 className="text-3xl font-mono font-bold text-white font-arvo">Sobre la zona</h1>
                    </div>
                    <div className="basis-1/2">
                        <div className="flex flex-col">
                            <h4 className="text-xl font-bold mb-3 text-blue-700">???? Qu?? hay cerca</h4>
                            <div>- Ruinas El Rey - A 16 min a pie</div>
                            <div>- Playa Delfines - A 17 min a pie</div>
                            <div>- Aquaworld - A 5 min en auto</div>
                        </div>
                    </div>
                </div>
            </Card>

            <Card className="mt-10 p-12 rounded-3xl">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="basis-1/2 grid place-items-center mb-7 md:mb-0 bg-gradient-to-r from-[#31752C] via-[#90A955] to-[#31752C] mx-10 p-2 rounded-2xl">
                        <h1 className="text-3xl font-mono font-bold text-white font-arvo">Contacto</h1>
                    </div>
                    <div className="basis-1/2">
                        <div className="flex flex-row space-x-3">

                            <a className="button--svg" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" role="img" aria-labelledby="facebook-icon">
                                    <title id="facebook-icon">Facebook</title>
                                    <path fill="#3C599A" d="M18.896 20.12h1.758v-1.708c0-.753.02-1.915.566-2.635.576-.762 1.368-1.28 2.73-1.28 2.218 0 3.15.316 3.15.316l-.438 2.605s-.73-.212-1.417-.212c-.684 0-1.296.245-1.296.93v1.985h2.803l-.194 2.547h-2.61v8.84h-3.297v-8.84h-1.758V20.12z" />
                                    <path className="button--svg__border" fill="#E5E5E5" d="M23 3c11.027 0 20 8.972 20 20 0 11.027-8.973 20-20 20-11.028 0-20-8.973-20-20C3 11.972 11.972 3 23 3m0-2C10.85 1 1 10.85 1 23s9.85 22 22 22 22-9.85 22-22S35.15 1 23 1z" />
                                </svg>
                            </a>

                            <a className="button--svg" href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" role="img" aria-labelledby="twitter-icon">
                                    <title id="twitter-icon">Twitter</title>
                                    <path className="button--svg__border" fill="#E5E5E5" d="M23 3c11.028 0 20 8.972 20 20s-8.972 20-20 20S3 34.028 3 23 11.972 3 23 3m0-2C10.85 1 1 10.85 1 23s9.85 22 22 22 22-9.85 22-22S35.15 1 23 1z" />
                                    <path fill="#5EA9DE" d="M31.52 17.716c-.627.278-1.302.466-2.008.55.722-.432 1.275-1.116 1.536-1.933-.676.4-1.422.69-2.22.847-.637-.68-1.546-1.103-2.552-1.103-1.93 0-3.494 1.565-3.494 3.495 0 .273.03.54.09.796-2.904-.146-5.48-1.536-7.205-3.653-.3.52-.473 1.12-.473 1.76 0 1.212.617 2.28 1.555 2.908-.576-.017-1.115-.176-1.587-.436v.043c0 1.694 1.205 3.107 2.805 3.427-.295.082-.603.123-.923.123-.225 0-.444-.02-.657-.062.445 1.388 1.736 2.4 3.266 2.425-1.196.94-2.704 1.498-4.34 1.498-.283 0-.562-.013-.835-.046 1.55.99 3.385 1.568 5.36 1.568 6.43 0 9.944-5.323 9.944-9.94 0-.153-.003-.306-.01-.454.684-.492 1.278-1.108 1.745-1.81" />
                                </svg>
                            </a>

                            <a className="button--svg" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" role="img" aria-labelledby="instagram-icon">
                                    <title id="instagram-icon">Instagram</title>
                                    <path className="button--svg__border" fill="#E5E5E5" d="M23 3c11.028 0 20 8.972 20 20s-8.972 20-20 20S3 34.028 3 23 11.972 3 23 3m0-2C10.85 1 1 10.85 1 23s9.85 22 22 22 22-9.85 22-22S35.15 1 23 1z" />
                                    <path fill="#5E6C89" d="M29.76 29.03v-7.373h-1.537c.152.48.23.975.23 1.49 0 .958-.243 1.838-.73 2.647-.485.807-1.146 1.447-1.98 1.918-.834.47-1.744.705-2.73.705-1.495 0-2.773-.514-3.835-1.543-1.062-1.027-1.593-2.27-1.593-3.726 0-.517.076-1.013.228-1.49H16.21v7.373c0 .2.065.37.2.5.13.14.296.2.494.2H29.07c.188 0 .352-.06.488-.2s.202-.3.202-.49zm-3.233-6.064c0-.94-.343-1.743-1.03-2.406-.686-.664-1.515-.996-2.486-.996-.96 0-1.78.332-2.47.996-.68.663-1.03 1.466-1.03 2.406 0 .942.35 1.743 1.03 2.407s1.51.996 2.48.996c.975 0 1.8-.34 2.49-1s1.03-1.47 1.03-2.41zm3.233-4.097v-1.88c0-.22-.076-.4-.23-.56-.15-.158-.336-.235-.556-.235h-1.98c-.22 0-.406.08-.558.233-.15.155-.228.34-.228.552v1.876c0 .22.076.404.228.556s.337.23.558.23h1.98c.22 0 .406-.078.557-.23.16-.15.23-.338.23-.558zm1.98-2.37v12.99c0 .61-.22 1.14-.66 1.58-.44.44-.967.66-1.582.66H16.502c-.614 0-1.142-.22-1.582-.66-.44-.44-.66-.97-.66-1.586V16.5c0-.614.22-1.142.66-1.582.44-.44.967-.66 1.582-.66h12.996c.615 0 1.14.22 1.582.66.44.44.66.967.66 1.58z" />
                                </svg>
                            </a>

                            <a className="button--svg" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" role="img" aria-labelledby="youtube-icon">
                                    <title id="youtube-icon">YouTube</title>
                                    <path className="button--svg__border" fill="#E5E5E5" d="M23 3c11.028 0 20 8.972 20 20s-8.972 20-20 20S3 34.028 3 23 11.972 3 23 3m0-2C10.85 1 1 10.85 1 23s9.85 22 22 22 22-9.85 22-22S35.15 1 23 1z" />
                                    <path fill="#E52E28" d="M27.68 23c0-.3-.12-.52-.364-.657l-6.24-3.9c-.253-.163-.517-.172-.793-.025-.27.147-.402.374-.402.683v7.803c0 .31.136.537.404.682.13.067.256.1.378.1.164 0 .3-.042.416-.122l6.24-3.9c.243-.14.365-.36.365-.66zm6.242 0c0 .78-.004 1.39-.012 1.83-.008.438-.043.993-.104 1.662-.06.672-.15 1.27-.274 1.8-.13.592-.41 1.092-.84 1.5-.43.405-.935.64-1.512.705-1.804.203-4.53.303-8.18.303-3.65 0-6.375-.1-8.18-.304-.576-.064-1.082-.3-1.517-.706-.435-.407-.717-.907-.847-1.5-.114-.527-.2-1.127-.263-1.8-.06-.668-.095-1.223-.103-1.662-.008-.438-.012-1.05-.012-1.828 0-.78.004-1.39.012-1.828.008-.44.042-.995.103-1.665.062-.67.152-1.27.274-1.797.13-.593.41-1.093.84-1.5.432-.407.936-.642 1.513-.707 1.804-.203 4.53-.305 8.18-.305 3.648 0 6.375.102 8.18.305.576.065 1.08.3 1.516.707.436.406.718.906.85 1.5.112.528.2 1.127.26 1.797.062.67.097 1.226.104 1.665.008.438.012 1.048.012 1.83z" />
                                </svg>
                            </a>


                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
}

export default DetalleLugar;