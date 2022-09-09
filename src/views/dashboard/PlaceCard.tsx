import Link from "next/link"

const PlaceCard = ({ nombre, departamento, descripcion, esCerro, esHotel, esGranja, esCabanha, imagenCard, id }: any) => {

    return (
        <div className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300 hover:contrast-125 cursor-pointer'>

            <Link href={{
                pathname: `/lugares/${id}`,
                query: id, // pass the id to the [id] component!
            }}>
                <div className="overflow-hidden">
                    <img className="rounded-t-3xl object-cover w-full h-52" src={imagenCard} alt="Imagen del lugar" />

                    <div className="p-4 bg-sky-100 rounded-b-3xl hover:bg-sky-300">

                        <p className="text-xl text-black"> {nombre}  </p>

                        <div className="flex flex-row flex-wrap space-x-2 my-1">
                            <strong className="border border-black-500 text-white bg-blue-700 uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                                {departamento}
                            </strong>
                            {esCerro ? <strong className="border border-green-500 text-white bg-green-500 uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                                Cerro
                            </strong> : null}
                            {esHotel ? <strong className="border border-orange-500 text-white bg-orange-500 uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                                Hotel
                            </strong> : null}
                            {esGranja ? <strong className="border border-lime-500 text-white bg-lime-500 uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                                Granja
                            </strong> : null}
                            {esCabanha ? <strong className="border border-cyan-500	text-white bg-cyan-500	uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                                Cabaña
                            </strong> : null}
                        </div>

                        <p className="mt-3 text-sm text-blue-900">
                            {descripcion}
                        </p>
                    </div>

                </div>
            </Link>

        </div>
    )
}

export default PlaceCard
