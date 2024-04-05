import { Link, useLocation } from 'react-router-dom'
import CarMobi from '../../../assets/car-mobi.svg'
import ButtonFav from '../buttonFav/ButtonFav'
import Auto from '../../../assets/vehicles/auto.png'
import Camioneta from '../../../assets/vehicles/camioneta.png'
import Moto from '../../../assets/vehicles/moto.png'
import { useEffect, useState } from 'react'


export const vehiclesImg = {
    auto: Auto,
    camioneta: Camioneta,
    moto: Moto
}

const Card = ({ vehicle }) => {


    console.log(vehicle);

    console.log(vehiclesImg);

    const [img, setImg] = useState()

    const { id, marca, categoria } = vehicle

    const handleClick = () => {
        alert('Estamos trabajando para que puedas reservar tu automovil')
    }

    const setImgVehicle = () => {

        for (const vImg in vehiclesImg) {
            if (vImg === categoria.titulo) {
                setImg(vehiclesImg[vImg])
            }
        }
    }

    useEffect(() => {
        setImgVehicle()
    }, [])


    return (
        <div className="w-11/12 md:w-full h-full bg-grey text-[#000] rounded-lg py-6">
            <div
                className='flex justify-end pr-4'
            >
                {/* <ButtonFav id={id} isFav={isFavorito} /> */}
            </div>
            <div className="max-w-sm mx-auto grid gap-y-4">
                <Link to={`/vehicles/${id}`}
                    className='block'
                >
                    <div className="h-full flex flex-col items-center gap-y-2">
                        <div className="h-36">
                            <img src={img} alt={'Fiat mobi 1.0'} className="h-full object-cover" />
                        </div>
                        <div
                            className='w-4/5'
                        >
                            <h2
                                className='text-2xl font-semibold uppercase'
                            >{marca}</h2>
                            <p className='uppercase text-sm mt-2'>
                                {categoria.titulo}
                            </p>
                        </div>
                    </div>
                </Link>
                <div className="w-4/5 mx-auto text-center flex flex-col gap-y-2">
                    <button type="submit" className="bg-secondary text-white rounded-lg h-10 px-4 py-2 first-letter:capitalize hover:opacity-80" onClick={handleClick}>
                        reservar ahora
                    </button>
                    <Link to={`/vehicles/${id}`} className="hover:text-secondary">
                        Mostrar mas detalles
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Card
