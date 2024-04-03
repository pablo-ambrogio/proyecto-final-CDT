import { useContext, useEffect, useState } from 'react'
import ModalContainer from '../modal/Modal'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import { NavBarContext } from '../../../context/NavbarContext'
import { useNavigate } from 'react-router-dom'


const Modal = () => {
    // const [modal1, setModal1] = useState(false)
    // const [modal2, setModal2] = useState(false)
    const getLocalStorage = () => {
        return JSON.parse(localStorage.getItem('jwt'));
    }

    const { modal1, modal2, setModal1, setModal2 } = useContext(NavBarContext)
    const [isJwt, setIsJwt] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (getLocalStorage()) {
            setIsJwt(true)
        }
        else {
            setIsJwt(false)
        }
    }, [modal1])

    return (
        <>
            <div className="flex justify-center w-full gap-4">
                {
                    !isJwt ? (
                        <>

                            <button
                                className="h-10 px-2 w-full lg:w-fit rounded-lg text-white border-0 bg-primary hover:bg-grey hover:text-secondary cursor-pointer font-bold first-letter:uppercase transition-in-out duration-300"
                                onClick={() => {
                                    setModal2(!modal2)
                                }}
                            >
                                registrarme
                            </button>
                            <button
                                className="h-10 px-2 w-full lg:w-fit rounded-lg text-white border-0 bg-primary hover:bg-grey hover:text-secondary cursor-pointer font-bold first-letter:uppercase transition-in-out duration-300"
                                onClick={() => {
                                    setModal1(!modal1)
                                }}
                            >
                                iniciar sesión
                            </button>
                        </>

                    ) : (

                        <button
                            className="h-10 px-2 w-full lg:w-fit rounded-lg text-white border-0 bg-primary hover:bg-grey hover:text-secondary cursor-pointer font-bold first-letter:uppercase transition-in-out duration-300"
                            onClick={() => {
                                localStorage.clear()
                                navigate("/")
                                setIsJwt(false)
                            }}
                        >
                            cerrar sesión
                        </button>
                    )
                }
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
