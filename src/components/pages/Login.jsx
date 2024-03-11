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
            <div className="flex ">
                <img src={LogoShort} alt="Logo AutoGo" className="pr-5 hidden md:block" />
                <div className="bg-red p-5">
                    <h2 className="font-modern text-lg my-3">iniciar sesión</h2>
                    <p className="mt-2 text-md">inicie sesión para continuar</p>
                    <form className="my-4" onSubmit={handleSubmit(formSubmit)}>
                        <div className="flex flex-col gap-6 ">
                            <div className="flex flex-col">
                                <label htmlFor="user" className="uppercase text-xs">
                                    E-mail
                                </label>
                                <input
                                    className="bg-grey rounded-md h-8 text-blue px-2 font-bold outline-none"
                                    type="email"
                                    name="user"
                                    id="user"
                                    autoComplete="off"
                                    {...register('user', {
                                        required: { value: true, message: '* este campo es obligatorio' },
                                        pattern: {
                                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                            message: '* por favor valide que el correo este correcto'
                                        }
                                    })}
                                />
                                {errors.user && (
                                    <span className="text-blue text-xs font-bold">{errors.user.message}</span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="uppercase text-xs">
                                    contraseña
                                </label>
                                <div className="flex justify-between items-center">
                                    <input
                                        className="bg-grey rounded-md h-8 text-blue px-2 font-bold outline-none"
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
                                    <span onClick={() => setShowPwd(!showPwd)} className="text-blue">
                                        {showPwd ? (
                                            <FontAwesomeIcon icon={faEye} />
                                        ) : (
                                            <FontAwesomeIcon icon={faEyeSlash} />
                                        )}
                                    </span>
                                </div>
                                {errors.password && (
                                    <span className="text-blue text-xs font-bold">{errors.password.message}</span>
                                )}
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-blue text-white px-16 py-2 rounded-lg uppercase font-modern"
                                >
                                    iniciar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
