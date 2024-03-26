import LogoHeader from '../../../assets/LogoRojo 1.svg'
import Menu from '../../../assets/BurguerMenu.svg'
import { Link } from 'react-router-dom'
import Buttons from './Buttons'
import Navbar from './Navbar'
import NavSearch from './NavSearch'

const Header = () => {
    return (
        <>
            <header className="flex flex-col sticky top-0">
                <nav className="flex items-center justify-between flex-wrap bg-blue py-2 px-6">
                    {/* icono del logo */}
                    <Link
                        to="/"
                        className="flex items-center flex-shrink-0 mr-6 hover:transition-in-out duration-300 hover:scale-110 hover:transition-in-out"
                    >
                        <img src={LogoHeader} alt="Logo AutoGo" />
                    </Link>

                    {/* icono de hamburguesa */}
                    <div className="block lg:hidden">
                        <a className="flex items-center border-0 rounded hover:text-white hover:border-white">
                            <img src={Menu} alt="menú" className="text-white" />
                        </a>
                    </div>

                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        {/* barra de links */}
                        <Navbar />

                        {/* botones de login y registro */}
                        <div className="flex gap-2">
                            <Buttons />
                        </div>
                    </div>
                </nav>

                {/* barra de busqueda */}
                <NavSearch />
            </header>
        </>
    )
}

export default Header
