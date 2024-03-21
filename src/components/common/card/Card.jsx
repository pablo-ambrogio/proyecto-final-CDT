import { Link } from 'react-router-dom'
import CarMobi from '../../../assets/car-mobi.svg'


const Card = ({ vehicle }) => {

    const { id, brand } = vehicle

    console.log(vehicle);

    const handleClick = () => {
        alert('Estamos trabajando para que puedas reservar tu automovil')
    }

    return (
        <div className="w-full h-64 bg-grey text-[#000] rounded-lg p-6 place-self-center">
            <div className="max-w-sm mx-auto h-full">
                <Link to={`/vehicles/${id}`}>
                    <div className="h-3/5 flex items-center gap-x-2">
                        <div className="w-2/4 h-full">
                            <img src={CarMobi} alt={'Fiat mobi 1.0'} className="w-full h-full " />
                        </div>
                        <div
                            className='h-full text-end pt-2 w-2/4'
                        >
                            <h2
                                className='text-2xl font-semibold'
                            >{brand}</h2>
                            <p
                                className=' uppercase text-[0.7rem]'
                            >grupo c - economico con aire mecánico</p>

                            {/* <div className="h-full text-end pt-2 w-2/4">
                                <h2 className="text-2xl font-semibold">Fiat Mobi 1.0</h2>
                                <p className=" uppercase text-[0.7rem]">grupo c - economico con aire mecánico</p>
                            </div> */}
                        </div>
                    </div>
                </Link>
                <div className="w-full h-2/5 text-center grid gap-y-2 mt-4">
                    <button type="submit" className="bg-blue text-white rounded-lg px-6 py-1 first-letter:capitalize hover:opacity-80" onClick={handleClick}>
                        reservar ahora
                    </button>
                    <div>
                        <Link to={''} className="hover:text-blue">
                            Mostrar mas detalles
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card
