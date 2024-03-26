import { Link } from "react-router-dom"
import CarMobi from '../../../assets/car-mobi.svg'

const ExploreVehicles = () => {
    return (
        <section aria-label='Categorias de vehículos'
            className='bg-secondary p-8'
        >
            <div
                className='lg:w-4/5 md:w-4/5 mx-auto py-6'
            >
                <h2
                    className='uppercase text-xl font-semibold mb-8'
                >explore otros tipos de vehículos</h2>
                <div
                    className='grid grid-cols-1 grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 justify-between '
                >
                    <article className='col-span-1 text-secondary text-center bg-white rounded-sm flex flex-col justify-evenly py-4'>
                        <Link to={'#'}>
                            <h2>Auto</h2>
                            <div className='text-center'>
                                <img src={CarMobi} alt="imane de auto" className='w-3/5 aspect-video mx-auto' />
                            </div>
                            <div>
                                <button className='text-lg text-secondary'>Ver opciones
                                    <span className='text-lg'>&gt;</span>
                                </button>
                            </div>
                        </Link>
                    </article>
                    <article className='col-span-1 text-secondary text-center bg-white rounded-sm flex flex-col justify-evenly py-4'>
                        <Link to={'#'}>
                            <h2>Auto</h2>
                            <div className='text-center'>
                                <img src={CarMobi} alt="imane de auto" className='w-3/5 aspect-video mx-auto' />
                            </div>
                            <div>
                                <button className='text-lg text-secondary'>Ver opciones
                                    <span className='text-lg'>&gt;</span>
                                </button>
                            </div>
                        </Link>
                    </article>
                    <article className='col-span-1 text-secondary text-center bg-white rounded-sm flex flex-col justify-evenly py-4'>
                        <Link to={'#'}>
                            <h2>Auto</h2>
                            <div className='text-center'>
                                <img src={CarMobi} alt="imane de auto" className='w-3/5 aspect-video mx-auto' />
                            </div>
                            <div>
                                <button className='text-lg text-secondary'>Ver opciones
                                    <span className='text-lg'>&gt;</span>
                                </button>
                            </div>
                        </Link>
                    </article>
                    <article className='col-span-1 text-secondary text-center bg-white rounded-sm flex flex-col justify-evenly py-4'>
                        <Link to={'#'}>
                            <h2>Auto</h2>
                            <div className='text-center'>
                                <img src={CarMobi} alt="imane de auto" className='w-3/5 aspect-video mx-auto' />
                            </div>
                            <div>
                                <button className='text-lg text-secondary'>Ver opciones
                                    <span className='text-lg'>&gt;</span>
                                </button>
                            </div>
                        </Link>
                    </article>
                </div>
            </div>
        </section>
    )
}
export default ExploreVehicles