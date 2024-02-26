import LogoHeader from '../../../assets/LogoRojo 1.svg'
import LogoReservas from '../../../assets/free-car-icon-1057-thumb.svg'
import LogoLogin from '../../../assets/Sample_User_Icon.svg'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className="w-full bg-blue-950 text-white flex justify-between align-center items-center mx-auto">
                <Link to="/" className="pl-20 w-1/6">
                    <img src={LogoHeader} alt="Logo AutoGo" />
                </Link>
                <nav className="uppercase w-4/6">
                    <Link to={'/vehiculos'}>vehículos</Link>
                    <Link to={'/redAgencias'} className="pl-2">
                        red de agencias
                    </Link>
                    <Link to={'/ofertas'} className="pl-2">
                        ofertas
                    </Link>
                    <Link to={'/paraEmpresas'} className="pl-2">
                        para empresas
                    </Link>
                    <Link to={'/dudas'} className="pl-2">
                        dudas
                    </Link>
                </nav>
                <div className="uppercase w-1/6">
                    <div className="flex items-center">
                        <img src={LogoReservas} alt="reservas" />
                        <Link to={'/reservas'} className="pl-2">
                            mis reservas
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <img src={LogoLogin} alt="login" />
                        <Link to={'/login'} className="pl-2">
                            login
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
