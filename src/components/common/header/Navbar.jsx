import { Link } from 'react-router-dom'
import NavSearch from './NavSearch'
import Buttons from './Buttons'
import LogoHeader from '../../../assets/LogoRojo 1.svg'

const Navbar = () => {
    return (
        <nav
            className='w-4/5 lg:w-full mx-auto'
        >
            <section
                className='grid grid-rows-[auto,1fr,auto] grid-cols-1 lg:grid-rows-2 lg:grid-cols-[1fr,1fr,1fr]'
            >
                <Link to="/" className='hidden lg:block row-start-1 row-end-2 col-start-1 col-end-2 lg:place-content-center'>
                    <img src={LogoHeader} width={140} alt="Logo AutoGo" />
                </Link>
                <div
                    className='text-md flex flex-col items-center lg:flex-row lg:justify-between lg:gap-24  gap-y-4
                    lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3
                    '
                >
                    <Link
                        to="/"
                        className="uppercase font-bold lg:inline-block lg:mt-0 text-grey hover:text-primary over:transition-in-out duration-150"
                    >
                        vehículos
                    </Link>
                    <Link
                        to="/offers"
                        className="uppercase font-bold  lg:inline-block lg:mt-0 text-grey hover:text-primary over:transition-in-out duration-150"
                        onClick={() =>
                            alert(
                                'Estamos trabajando para darte las mejores ofertas del mercado'
                            )
                        }
                    >
                        ofertas
                    </Link>
                    <Link
                        to="/favorite"
                        className="uppercase font-bold lg:inline-block lg:mt-0 text-grey hover:text-primary over:transition-in-out duration-150"
                    >
                        favoritos
                    </Link>
                </div>
                <div className='row-start-3 row-end-4 lg:row-start-1 lg:row-end-2 lg:place-content-center'>
                    <Buttons />
                </div>
                <div className='row-start-2 row-end-3 col-start-1 col-end-4'>
                    <NavSearch />
                </div>
            </section>
        </nav>
    )
}

export default Navbar
