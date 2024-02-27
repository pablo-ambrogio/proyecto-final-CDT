import LogoHeader from '../../../assets/LogoRojo 1.svg'
import LogoReservas from '../../../assets/free-car-icon-1057-thumb.svg'
import LogoLogin from '../../../assets/Sample_User_Icon.svg'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="w-full bg-blue">
            <section className="flex uppercase items-center justify-center mx-auto ">
                <Link to="/" className="ml-5">
                    <img src={LogoHeader} alt="Logo AutoGo" />
                </Link>
                <nav className="w-5/6 flex justify-evenly">
                    <Link to={'/vehicles'}>vehículos</Link>
                    {/* <Link to={'/redAgencias'}>red de agencias</Link> */}
                    <Link to={'/offers'}>ofertas</Link>
                    {/* <Link to={'/paraEmpresas'}>para empresas</Link> */}
                    {/* <Link to={'/dudas'}>dudas</Link> */}
                </nav>
                <div className="capitalize flex gap-2 mr-5">
                    <Link to={'/register'} className="bg-red font-bold w-48 py-2 mt-8 rounded text-center">crear cuenta</Link>
                    <Link to={'/login'} className="bg-red font-bold w-48 py-2 mt-8 rounded text-center">iniciar sesión</Link>
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
