import { Link } from 'react-router-dom'
import NavSearch from './NavSearch'
import Buttons from './Buttons'
import LogoHeader from '../../../assets/LogoRojo 1.svg'
import { useContext } from 'react'
import { NavBarContext } from '../../../context/NavbarContext'

const Navbar = () => {


    const { setMenu } = useContext(NavBarContext)

    const handleClick = () => {
        setMenu(false)
    }


    return (
        <nav
            className='w-11/12 lg:w-full mx-auto h-full'
        >
            <section
                className='grid h-4/5 items-center grid-rows-[auto,auto,auto] lg:grid-rows-2 lg:grid-cols-[auto,1fr,auto] lg:justify-between px-4'
            >
                <Link to="/" className='hidden lg:block row-start-1 row-end-2 col-start-1 col-end-2 lg:place-content-center'>
                    <img src={LogoHeader} width={140} alt="Logo AutoGo" />
                </Link>
                <div
                    className='text-md flex flex-col items-center lg:flex-row lg:justify-center lg:gap-24 gap-y-4
                    lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3 col-span-3
                    '
                >
                    <Link
                        to="/"
                        className="uppercase font-bold lg:inline-block lg:mt-0 text-grey hover:text-primary over:transition-in-out duration-150"
                        onClick={handleClick}
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
                        onClick={handleClick}
                    >
                        favoritos
                    </Link>
                </div>
                <div className='row-start-3 row-end-4 lg:row-span-1 lg:place-content-center col-span-3 lg:col-span-1' >
                    <Buttons />
                </div>
                <div className='row-start-2 row-end-3 col-span-3'>
                    <NavSearch />
                </div>
            </section>
        </nav>
    )
}

export default Navbar
