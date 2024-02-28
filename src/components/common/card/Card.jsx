import CarMobi from '../../../assets/car-mobi.svg'

const Card = () => {
    return (
        <div
            className='w-96 h-52 bg-grey text-[#000] rounded-lg p-4'
        >
            <div
                className='flex h-3/4 items-center gap-x-2'
            >
                <div
                    className='w-2/4 h-full'
                >
                    <img src={CarMobi} alt={'Fiat mobi 1.0'}
                        className='w-48 h-full'
                    />
                </div>
                <div
                    className='h-full text-end pt-2 w-2/4'
                >
                    <h2
                        className='text-2xl font-semibold'
                    >Fiat Mobi 1.0</h2>
                    <p
                        className=' uppercase text-[0.7rem]'
                    >grupo c - economico con aire mecánico</p>
                </div>
            </div>
            <div
                className='w-full text-center mt-2'
            >
                <button type="submit"
                    className='bg-blue text-white rounded-lg px-6 py-1 first-letter:capitalize'
                >reservar ahora</button>
            </div>
        </div>
    )
}
export default Card