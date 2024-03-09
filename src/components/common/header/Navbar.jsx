import LogoHeader from '../../../assets/LogoRojo 1.svg'
// import LogoReservas from '../../../assets/free-car-icon-1057-thumb.svg'
// import LogoLogin from '../../../assets/Sample_User_Icon.svg'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="w-full bg-blue sticky top-0">
            <section className="grid grid-cols-12 p-4 uppercase items-center">
                <Link to="/" className="col-span-2 flex justify-center items-center hover:transition-in-out duration-300 hover:scale-110 hover:transition-in-out">
                    <img src={LogoHeader} alt="Logo AutoGo" />
                </Link>
                <nav className="col-span-7 flex justify-evenly font-bold">
                    <Link to="/" className="hover:text-red text-grey hover:transition-in-out duration-300">
                        vehículos
                    </Link>
                    <Link to="/offers" className="hover:text-red text-grey hover:transition-in-out duration-300"
                        onClick={() => alert("Estamos trabajando para darte las mejores ofertas del mercado")}
                    >
                        ofertas
                    </Link>
                </nav>
                <div className="col-span-3 capitalize text-center font-bold">
                    <Link to="/register" className="bg-red hover:bg-grey hover:text-blue px-6 py-2 rounded-lg mr-2 transition-in-out duration-700">
                        crear cuenta
                    </Link>
                    <Link to="/login" className="bg-red hover:bg-grey hover:text-blue px-6 py-2 rounded-lg">
                        iniciar sesión
                    </Link>
                </div>
            </section>
            <section className="grid grid-cols-5 gap-8 bg-blue2 uppercase p-2 items-center justify-evenly">
                <input className="grid col-span-3 p-2 rounded-md bg-grey ml-10" type="text" placeholder="Informa el punto de retirada (Ej: Buenos Aires, Bogotá)" />
                <input className="p-2 rounded-md bg-grey" type="date" placeholder="Fecha" />
                <input className="p-2 rounded-md bg-grey mr-10" type="time" placeholder="hora" />
            </section>
        </header>
    )
}

export default Navbar
