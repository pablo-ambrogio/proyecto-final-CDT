import { useState } from 'react'
import ModalContainer from './ModalContainer'
import Login from '../../pages/Login'
import Register from '../../pages/Register'

const Modal = () => {
    const [modal1, setModal1] = useState(false)
    const [modal2, setModal2] = useState(false)
    
    return (
        <>
        {/* botones del header */}
            <div className="flex flex-wrap justify-center gap-2">
                <button
                    className="block py-2 px-4 leading-none rounded-lg text-sm text-white border-0 bg-red hover:bg-grey hover:text-blue cursor-pointer font-bold capitalize transition-in-out duration-700"
                    onClick={() => {
                        setModal2(!modal2)
                    }}
                >
                    crear usuario
                </button>
                <button
                    className="block py-2 px-4 leading-none rounded-lg text-sm text-white border-0 bg-red hover:bg-grey hover:text-blue cursor-pointer font-bold capitalize transition-in-out duration-700"
                    onClick={() => {
                        setModal1(!modal1)
                    }}
                >
                    iniciar sesión
                </button>
            </div>
            
            <ModalContainer state={modal1} setState={setModal1}>
                <div className="flex flex-col items-center">
                    <Login />
                </div>
            </ModalContainer>
            
            <ModalContainer state={modal2} setState={setModal2}>
                <div className="flex flex-col items-center">
                    <Register />
                </div>
            </ModalContainer>
        </>
    )
}

export default Modal
