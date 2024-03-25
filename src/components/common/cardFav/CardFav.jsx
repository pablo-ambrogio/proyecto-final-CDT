import axios from 'axios'
import CarMobi from '../../../assets/car-mobi.svg'

const CardFav = ({ vehicle }) => {

    const { id, brand } = vehicle

    const handleDelete = async (id) => {
        await axios.patch(`http://localhost:3000/vehicles/${id}`, {
            isFav: false
        })
    }

    return (
        <div className="w-3/5 max-w-3xl h-44 bg-grey text-[#000] rounded-lg p-6 place-self-center">
            <div className="max-w-sm h-full flex gap-8">
                <div className="h-full w-full gap-x-2">
                    <div className="h-full">
                        <img src={CarMobi} alt={'Fiat mobi 1.0'} className="w-full h-full " />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-between">
                    <h2 className='text-2xl font-semibold'>
                        {brand}
                    </h2>
                    <div>
                        <button type="submit" className='text-secondary' onClick={() => handleDelete(id)}>
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default CardFav