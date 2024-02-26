import LogoHeader from '../../../assets/LogoRojo 1.svg'
import LogoReservas from '../../../assets/free-car-icon-1057-thumb.svg'
import LogoLogin from '../../../assets/Sample_User_Icon.svg'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="w-full flex bg-blue uppercase p-2 items-center">
            <Link to="/" className="w-2/12 h-full flex justify-evenly items-center mx-auto">
                <img src={LogoHeader} alt="Logo AutoGo" />
            </Link>
            <nav className="w-8/12 flex justify-evenly">
                <Link to={'/vehiculos'}>vehículos</Link>
                <Link to={'/redAgencias'}>red de agencias</Link>
                <Link to={'/ofertas'}>ofertas</Link>
                <Link to={'/paraEmpresas'}>para empresas</Link>
                <Link to={'/dudas'}>dudas</Link>
            </nav>
            <div className="w-2/12 justify-evenly">
                <div className="flex items-center">
                    <img src={LogoReservas} alt="reservas" />
                    <Link to={'/reservas'}>mis reservas</Link>
                </div>
                <div className="flex items-center">
                    <img src={LogoLogin} />
                    <Link to={'/login'}>login</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar
