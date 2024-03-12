import LogoHeader from '../../../assets/LogoRojo 1.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
// import { useState } from 'react'
// import ModalLogin from '../../pages/ModalLogin'

const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <header className="flex flex-col sticky top-0">
                <nav class="flex items-center justify-between flex-wrap bg-blue py-2 px-6">
                    <Link
                        to="/"
                        className="flex items-center flex-shrink-0 mr-6 hover:transition-in-out duration-300 hover:scale-110 hover:transition-in-out"
                    >
                        <img src={LogoHeader} alt="Logo AutoGo" />
                    </Link>
                    <div class="block lg:hidden">
                        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <FontAwesomeIcon
                                icon={faBars}
                                className="text-blue"
                            />
                        </button>
                    </div>
                    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div class="text-md lg:flex-grow flex justify-center gap-24">
                            <Link
                                to="/"
                                className="uppercase font-bold block mt-4 lg:inline-block lg:mt-0 text-grey hover:text-red over:transition-in-out duration-300 mr-4"
                            >
                                vehículos
                            </Link>
                            <Link
                                to="/offers"
                                className="uppercase font-bold block mt-4 lg:inline-block lg:mt-0 text-grey hover:text-red over:transition-in-out duration-300 mr-4"
                                onClick={() =>
                                    Swal.fire({
                                        confirmButtonColor: '#041562',
                                        html: '<p class = "text-red text-xl font-bold" >Estamos trabajando para darte las mejores ofertas del mercado</p>'
                                    })
                                }
                            >
                                ofertas
                            </Link>
                        </div>
                        <div className="flex gap-2">
                            <Link
                                to="/register"
                                className="inline-block text-sm capitalize font-bold px-4 py-2 leading-none rounded-lg bg-red hover:bg-grey hover:text-blue transition-in-out duration-700 "
                            >
                                crear cuenta
                            </Link>
                            {/* <ModalLogin /> */}

                            <Link
                                to="/login"
                                className="inline-block text-sm capitalize font-bold px-4 py-2 leading-none rounded-lg bg-red hover:bg-grey hover:text-blue transition-in-out duration-700 "
                                >
                                iniciar sesión
                            </Link>
                        </div>
                    </div>
                </nav>
                <section className="flex bg-blue2 w-full px-16 py-2 gap-3">
                    <input
                        className="rounded py-1 px-5 bg-grey text-blue outline-none flex-1"
                        type="text"
                        placeholder="Informa el punto de retirada (Ej: Buenos Aires, Bogotá)"
                    />
                    <input
                        className="rounded py-1 px-5 bg-grey text-blue outline-none"
                        type="date"
                        placeholder="Fecha"
                    />
                    <input
                        className="rounded py-1 px-5 bg-grey text-blue outline-none"
                        type="time"
                        placeholder="hora"
                    />
                </section>
            </header>
        </>
    )
}

export default Navbar
