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
                className="capitalize text-center font-bold bg-red hover:bg-grey hover:text-blue px-6 py-2 rounded-lg inline-block"
                onClick={() => setIsOpen(true)}
            >
                iniciar sesión
            </Link>
            {isOpen && (
                <div className="fixed inset-0 bg-grey bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
                    <div className="bg-grey rounded flex flex-col justify-center items-center gap-5 p-10">
                        <Login />
                    </div>

                    <button
                        className="text-blue text-4xl "
                        onClick={() => setIsOpen(false)}
                    >
                        {<FontAwesomeIcon icon={faX} />}
                    </button>
                </div>
            )}
        </>
    )
}

export default ModalLogin
