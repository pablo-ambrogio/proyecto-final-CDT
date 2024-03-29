import CarMobi from '../../../assets/car-mobi.svg'
import ButtonFav from '../buttonFav/ButtonFav'

const CardFav = ({ vehicle }) => {

    const { id, brand } = vehicle

    return (
        <div className="w-11/12 lg:3/5 max-w-3xl h-44 bg-grey text-[#000] rounded-lg p-6 place-self-center">
            <div className="w-full h-full flex justify-start gap-x-2 lg:gap-x-4">
                <div className="h-full w-fit">
                    <div className="h-full">
                        <img src={CarMobi} alt={'Fiat mobi 1.0'} className="w-full h-full " />
                    </div>
                </div>
                <div className="w-full flex">
                    <h2 className='text-base lg:text-2xl font-semibold uppercase'>
                        {brand}
                    </h2>
                    <div
                        className='w-full flex justify-end items-start'
                    >
                        <ButtonFav id={id} isFav={vehicle.isFav} />
                    </div>
                </div>
            </div>
        </div >
    )
}
export default CardFav