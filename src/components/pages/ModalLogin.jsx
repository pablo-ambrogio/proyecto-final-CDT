import { useState } from 'react'
import Login from './Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ModalLogin = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Link
                to="/login"
                className="inline-block text-sm capitalize font-bold px-4 py-2 leading-none rounded-lg bg-red hover:bg-grey hover:text-blue transition-in-out duration-700"
                onClick={() => setIsOpen(true)}
            >
                iniciar sesión
            </Link>
            {isOpen && (
                <div className="fixed inset-0 bg-blue bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
                    <div className="flex bg-grey rounded-xl gap-5 p-5">
                        <Login />

                        {/* ICONO DE X PARA CERRAR */}
                        <Link
                            to="/"
                            className="text-blue text-4xl bg-grey flex"
                            onClick={() => setIsOpen(false)}
                        >
                            {<FontAwesomeIcon icon={faX} />}
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalLogin
