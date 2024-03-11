import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import LogoShort from '../../assets/Logo_Short 2.svg'

const Login = () => {
    const [showPwd, setShowPwd] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm()

    const formSubmit = handleSubmit(data => {
        Swal.fire({
            icon: 'success',
            html: '<p class = "text-blue text-xl font-bold" >Usuario registrado con éxito</p>',
            showConfirmButton: false,
            timer: 2000
        })
        console.log(data)
        reset()
    })

    return (
        <>
            {/* CONTENEDOR */}
            <div className="flex flex-wrap h-screen bg-grey content-center justify-center">
                {/* BLOQUE IMAGEN IZQUIERDA */}
                <div className='bg-blue p-5 rounded-md'>
                    <img
                        className="w-36"
                        src={LogoShort}
                        alt="Logo AutoGo"
                    />
                </div>

                {/* BLOQUE FORMULARIO DERECHA*/}
                <div className="bg-red p-5 rounded-md">
                    {/* TÍTULO */}
                    <div className="bg-blue">
                        <h2 className="font-modern text-lg">iniciar sesión</h2>
                        <p className="mb-5 text-sm">
                            inicie sesión para continuar
                        </p>
                    </div>

                    {/* FORM */}
                    <form
                        className="bg-blue2"
                        onSubmit={handleSubmit(formSubmit)}
                    >
                        <div className="">
                            <label htmlFor="user" className="uppercase text-xs">
                                E-mail
                            </label>
                            <input
                                className="rounded-md outline-none h-8 text-blue font-bold pl-2 bg-grey"
                                type="email"
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
                                        message:
                                            '* por favor valide que el correo este correcto'
                                    }
                                })}
                            />
                            {errors.user && (
                                <span className="text-blue font-bold text-sm">
                                    {errors.user.message}
                                </span>
                            )}
                        </div>

                        {/* PASSWORD */}
                        <div className="">
                            <label
                                htmlFor="password"
                                className="uppercase text-xs"
                            >
                                contraseña
                            </label>
                            <div className="">
                                <input
                                    className="rounded-md outline-none h-8 text-blue font-bold pl-2 bg-grey"
                                    type={showPwd ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    autoComplete="off"
                                    {...register('password', {
                                        required: {
                                            value: true,
                                            message:
                                                '* este campo es obligatorio'
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
                                    className="text-blue"
                                >
                                    {showPwd ? (
                                        <FontAwesomeIcon icon={faEye} />
                                    ) : (
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                    )}
                                </span>
                            </div>
                            {errors.password && (
                                <span className="text-blue font-bold text-sm leading">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>

                        {/* BOTÓN INICIAR */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue text-white px-16 py-2 rounded-lg uppercase font-modern mt-3"
                            >
                                iniciar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
