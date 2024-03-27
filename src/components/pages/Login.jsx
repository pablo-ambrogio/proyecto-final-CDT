import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import LogoShort from '../../assets/Logo_Short 2.svg'
import axios from 'axios'

const Register = () => {
    const [showPwd, setShowPwd] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        reset
    } = useForm({ mode: 'OnChange' })

    const loginSubmit = data => {
        const refactorData = {
            user: data.user,
            password: data.password,
            role: 'user'
        }
        // console.log(refactorData);
        localStorage.setItem('user', refactorData.user)
        localStorage.setItem('password', refactorData.password)
        localStorage.setItem('role', refactorData.role)
        // reset()
    }

    // useEffect(()=>)

    // const iniciarSesion = async () => {
    //     await axios
    //         .get('http://localhost:3000/login', formSubmit)
    //         .then(res => {
    //             console.log(res.data)
    //             return res.data
    //         })
    //         .then(res => {
    //             if (res.length > 0) {
    //                 // aqui el acceso

    //             } else {
    //                 alert('El usuario o la contraseña no son validos')
    //             }
    //         })
    //         .catch(error => console.log(error))
    // }

    return (
        <>
            {/* CONTENEDOR */}
            <div className="flex justify-center">
                <div className="flex bg-grey p-4 rounded-md">
                    {/* BLOQUE IMAGEN IZQUIERDA */}
                    <div className="p-5 rounded-md sm:hidden lg:block">
                        <img className="object-scale-down h-full w-96 items-center" src={LogoShort} alt="Logo AutoGo" />
                    </div>

                    {/* BLOQUE FORMULARIO DERECHA */}
                    <div className="bg-primary p-12 rounded-md w-96 flex flex-col justify-center">
                        {/* TÍTULO */}
                        <div>
                            <h2 className="font-modern text-2xl">iniciar sesión</h2>
                            <p className="mb-10 text-sm">inicie sesión para continuar</p>
                        </div>

                        {/* FORM */}
                        <form className="flex flex-col" onSubmit={handleSubmit(loginSubmit)}>
                            {/* USUARIO */}
                            <div className="flex flex-col mb-3">
                                <label htmlFor="user" className="uppercase text-xs">
                                    E-mail
                                </label>
                                <input
                                    className="rounded-md outline-none h-8 text-secondar font-bold pl-2 bg-grey"
                                    type="text"
                                    name="user"
                                    id="user"
                                    autoComplete="off"
                                    {...register('user', {
                                        required: {
                                            value: true,
                                            message: '* este campo es obligatorio'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                            message: '* por favor valide que el correo este correcto'
                                        }
                                    })}
                                />
                                {errors.user && (
                                    <span className="text-secondar font-bold text-xs leading">
                                        {errors.user.message}
                                    </span>
                                )}
                            </div>

                            {/* PASSWORD */}
                            <div className="flex flex-col mb-3">
                                <label htmlFor="password" className="uppercase text-xs">
                                    contraseña
                                </label>
                                <div className="relative rounded-md">
                                    <input
                                        className="block w-full rounded-md outline-none h-8 text-secondar font-bold pl-2 bg-grey"
                                        type={showPwd ? 'text' : 'password'}
                                        name="password"
                                        id="password"
                                        autoComplete="off"
                                        {...register('password', {
                                            required: {
                                                value: true,
                                                message: '* este campo es obligatorio'
                                            },
                                            pattern: {
                                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                                                message:
                                                    '* la contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un caracter especial'
                                            }
                                        })}
                                    />
                                    <span
                                        onClick={() => setShowPwd(!showPwd)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-secondar"
                                    >
                                        {showPwd ? (
                                            <FontAwesomeIcon icon={faEye} />
                                        ) : (
                                            <FontAwesomeIcon icon={faEyeSlash} />
                                        )}
                                    </span>
                                </div>
                                {errors.password && (
                                    <span className="text-secondar font-bold text-xs leading">
                                        {errors.password.message}
                                    </span>
                                )}
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-secondary text-white px-16 py-2 rounded-lg uppercase font-modern mt-1"
                                >
                                    iniciar
                                </button>
                                <hr className="mt-5" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register
