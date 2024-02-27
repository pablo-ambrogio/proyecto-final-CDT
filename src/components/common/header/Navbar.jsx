import LogoHeader from '../../../assets/LogoRojo 1.svg'
import LogoReservas from '../../../assets/free-car-icon-1057-thumb.svg'
import LogoLogin from '../../../assets/Sample_User_Icon.svg'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="w-full bg-blue">
            <section className="flex uppercase p-2 items-center justify-center  mx-auto">
                <Link to="/" className="ml-5">
                    <img src={LogoHeader} alt="Logo AutoGo" />
                </Link>
                <nav className="w-5/6 flex justify-evenly">
                    <Link to={'/vehiculos'}>vehículos</Link>
                    {/* <Link to={'/redAgencias'}>red de agencias</Link> */}
                    <Link to={'/ofertas'}>ofertas</Link>
                    {/* <Link to={'/paraEmpresas'}>para empresas</Link> */}
                    {/* <Link to={'/dudas'}>dudas</Link> */}
                </nav>
                <div className="w-1/6 mr-5">
                    <div className="flex items-center justify-between">
                        <img src={LogoReservas} alt="reservas" />
                        <Link to={'/reservas'}>mis reservas</Link>
                    </div>
                    <div className="flex items-center justify-between">
                        <img src={LogoLogin} />
                        <Link to={'/login'}>login</Link>
                    </div>
                </div>
            </section>
            <section className="w-full flex bg-blue2 uppercase p-2 items-center justify-evenly">
                <input className="w-1/2 p-2 rounded-md" type="text" placeholder="Informa el punto de retirada (Ej: Buenos Aires, Bogotá)" />
                <input className="p-2 rounded-md" type="text" placeholder="Fecha" />
                <input className="p-2 rounded-md" type="text" placeholder="hora" />
            </section>
        </header>
    )
}

export default Navbar
