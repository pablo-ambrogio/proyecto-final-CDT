import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import CarMobi from '../../../assets/car-mobi.svg'
import IconFav from '../../../assets/icon-fav.svg'
import IconFavRed from '../../../assets/icon-fav-red.svg'
import axios from 'axios'
import { FilterContext } from '../../../context/FilterContext'


const CardDetail = () => {

    const { id } = useParams()
    const [fav, setFav] = useState(false)

    const { vehicleId, getVehicleForId } = useContext(FilterContext)

    const getFav = async () => {
        const { data } = await axios.get(`http://localhost:3000/vehicles/${id}`)
        setFav(data.isFav);
    }

    const putFav = async () => {
        await axios.patch(`http://localhost:3000/vehicles/${id}`, {
            isFav: fav
        })
    }

    const handleFav = () => {
        setFav(!fav)
    }

    useEffect(() => {
        getFav()
        getVehicleForId(id)
    }, [id])
    console.log(vehicleId);

    useEffect(() => {
        putFav()
    }, [fav])


    return (
        <div>
            <article
                className='bg-grey p-8 text-blue lg:h-[28rem] sm:h-auto rounded-lg max-w-4xl mx-auto'
            >
                <section
                    className='flex justify-between items-center pr-2'
                >
                    <div>

                        <h1
                            className='text-2xl font-bold'
                        >{vehicleId.brand}</h1>
                        <p
                            className='uppercase text-sm'
                        >{vehicleId.category}</p>
                    </div>
                    <div
                        onClick={handleFav}
                    >
                        <img src={`
                        ${!fav ? IconFav : IconFavRed}`
                        } alt="icono de corazon, sirve para marcar como favorito" />
                    </div>
                </section>
                <section
                    className='grid lg:grid-cols-2 lg:grid-rows-4 h-4/5 gap-x-4 md:gap-6'
                >
                    <div
                        className='lg:col-span-1 lg:row-start-1 row-end-4'
                    >
                        <img src={CarMobi} alt="Auto fiat mobi"
                            className='w-4/5 h-full mx-auto lg:w-full '
                        />
                    </div>
                    <div
                        className='lg:col-span-1 lg:row-start-1 row-span-3 flex items-center'
                    >
                        <p className='tracking-wider'>
                            El Fiat Mobi 1.0 es un compacto producido en Brasil, equipado con un motor Fire de 1.0 litro que desarrolla 68 caballos de potencia. Destaca por su diseño robusto, su interior con pantalla de siete pulgadas y un baúl de 235 litros. Su transmisión es manual de cinco velocidades.
                        </p>

                    </div>
                    <div
                        className='lg:col-star-2 lg:col-end-3 lg:row-start-4 lg:row-span-1 flex justify-center items-center'
                    >
                        <button
                            className='first-letter:uppercase w-[15rem] bg-blue p-2 text-white rounded-lg'
                        >resevar ahora</button>
                    </div>
                </section>
            </article>
        </div>

    )
}
export default CardDetail