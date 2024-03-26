import { Link } from 'react-router-dom'
import CarMobi from '../../../assets/car-mobi.svg'
import ButtonFav from '../buttonFav/ButtonFav'


const Card = ({ vehicle }) => {

    const { id, brand, category } = vehicle

    const handleClick = () => {
        alert('Estamos trabajando para que puedas reservar tu automovil')
    }

    return (
        <div className="w-full h-full bg-grey text-[#000] rounded-lg">
            <ButtonFav id={id} />
            <p>{id}</p>
            <div className="max-w-sm mx-auto h-full py-8 grid gap-y-4">
                <Link to={`/vehicles/${id}`}
                    className='block'
                >
                    <div className="h-full flex flex-col items-center gap-y-2">
                        <div className="h-36">
                            <img src={CarMobi} alt={'Fiat mobi 1.0'} className="h-full" />
                        </div>
                        <div
                            className='w-4/5'
                        >
                            <h2
                                className='text-2xl font-semibold uppercase'
                            >{brand}</h2>
                            <p className='uppercase text-sm mt-2'>
                                {category}
                            </p>
                        </div>
                    </div>
                </Link>
                <div className="w-4/5 mx-auto text-center grid gap-y-2">
                    <button type="submit" className="bg-secondary text-white rounded-lg px-4 py-2 first-letter:capitalize hover:opacity-80" onClick={handleClick}>
                        reservar ahora
                    </button>
                    <div>
                        <Link to={`/vehicles/${id}`} className="hover:text-secondary">
                            Mostrar mas detalles
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card
