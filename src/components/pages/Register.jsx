import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
// import Swal from 'sweetalert2'
import Logo from '../../assets/Logo 1.svg'
import Eye from '../../assets/eye-solid.svg'
import EyeSlash from '../../assets/eye-slash-solid.svg'
import axios from 'axios'

const Register = () => {
    const [showPwd, setShowPwd] = useState(false)
    const [showPwd2, setShowPwd2] = useState(false)
    const [emailSent, setEmailSent] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm()

    const formSubmit = handleSubmit(data => {
        setEmailSent(true)

        const refactorizacion = {
            username: data.username,
            password: data.password,
            apellido: data.lastname,
            email: data.email,
            nombre: data.name,
            role: 'CUSTOMER'
        }

        // Swal.fire({
        //     icon: 'success',
        //     html: '<p class = "text-secondary text-xl font-bold" >Usuario creado con éxito</p>',
        //     showConfirmButton: false,
        //     timer: 2000
        // })
        alert('Usuario creado con éxito')
        console.log(refactorizacion)

        for (const key in refactorizacion) {
            if (typeof refactorizacion[key] === 'string') {
                refactorizacion[key] = refactorizacion[key].toLowerCase()
            }
        }

        axios.post('http://localhost:3000/users', refactorizacion)
        // axios.post("http://localhost:8084/auth/register", refactorizacion, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })

        // reset()
        sendEmail(data.email, data.name)
    })

    const sendEmail = async (email, name) => {
        await axios.post('http://localhost:4000/nodemailer', { email, name })
    }

    return (
        <>
            {/* CONTENEDOR */}
            <div className="flex justify-center">
                <div className="flex bg-grey p-4 rounded-md">
                    {/* BLOQUE IMAGEN IZQUIERDA */}
                    <div className="p-5 rounded-md sm:hidden lg:block">
                        <img
                            className="object-scale-down h-full w-96 items-center"
                            src={Logo}
                            alt="Logo AutoGo"
                        />
                    </div>

                    {/* BLOQUE FORMULARIO DERECHA */}
                    <div className="bg-secondary2 bg-gradient-to-t from-degrade px-12 py-4 rounded-md w-96 flex flex-col justify-center">
                        {/* TÍTULO */}
                        <h2 className="font-modern text-2xl mb-5">
                            crear cuenta
                        </h2>

                        {/* FORM */}
                        <form
                            className="flex flex-col"
                            onSubmit={handleSubmit(formSubmit)}
                        >
                            {/* USERNAME */}

                            <div className="flex flex-col mb-3">
                                <label
                                    htmlFor="name"
                                    className="uppercase text-xs"
                                >
                                    username
                                </label>
                                <input
                                    className="rounded-md outline-none h-8 text-secondary font-bold pl-2 bg-grey"
                                    type="text"
                                    name="username"
                                    id="username"
                                    // disabled
                                    autoComplete="off"
                                    {...register('username', {
                                        required: {
                                            value: true,
                                            message:
                                                '* este campo es obligatorio'
                                        },
                                        minLength: {
                                            value: 3,
                                            message:
                                                '* el nombre debe tener al menos 3 caracteres'
                                        },
                                        maxLength: {
                                            value: 20,
                                            message:
                                                '* el nombre debe tener máximo 20 caracteres'
                                        }
                                    })}
                                />
                                {errors.username && (
                                    <span className="text-primary font-bold text-xs leading">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>

                            {/* NOMBRE */}
                            <div className="flex flex-col mb-3">
                                <label
                                    htmlFor="name"
                                    className="uppercase text-xs"
                                >
                                    nombre
                                </label>
                                <input
                                    className="rounded-md outline-none h-8 text-secondary font-bold pl-2 bg-grey"
                                    type="text"
                                    name="name"
                                    id="name"
                                    // disabled
                                    autoComplete="off"
                                    {...register('name', {
                                        required: {
                                            value: true,
                                            message:
                                                '* este campo es obligatorio'
                                        },
                                        minLength: {
                                            value: 3,
                                            message:
                                                '* el nombre debe tener al menos 3 caracteres'
                                        },
                                        maxLength: {
                                            value: 20,
                                            message:
                                                '* el nombre debe tener máximo 20 caracteres'
                                        }
                                    })}
                                />
                                {errors.name && (
                                    <span className="text-primary font-bold text-xs leading">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>

                            {/* APELLIDO */}
                            <div className="flex flex-col mb-3">
                                <label
                                    htmlFor="lastname"
                                    className="uppercase text-xs"
                                >
                                    apellido
                                </label>
                                <input
                                    className="rounded-md outline-none h-8 text-secondary font-bold pl-2 bg-grey"
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    autoComplete="off"
                                    {...register('lastname', {
                                        required: {
                                            value: true,
                                            message:
                                                '* este campo es obligatorio'
                                        },
                                        minLength: {
                                            value: 3,
                                            message:
                                                '* el apellido debe tener al menos 3 caracteres'
                                        },
                                        maxLength: {
                                            value: 20,
                                            message:
                                                '* el apellido debe tener máximo 20 caracteres'
                                        }
                                    })}
                                />
                                {errors.lastname && (
                                    <span className="text-primary font-bold text-xs leading">
                                        {errors.lastname.message}
                                    </span>
                                )}
                            </div>

                            {/* CORREO */}
                            <div className="flex flex-col mb-3">
                                <label
                                    htmlFor="email"
                                    className="uppercase text-xs"
                                >
                                    E-mail
                                </label>
                                <input
                                    className="rounded-md outline-none h-8 text-secondary font-bold pl-2 bg-grey"
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    {...register('email', {
                                        required: {
                                            value: true,
                                            message:
                                                '* este campo es obligatorio'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                            message:
                                                '* por favor valide que el correo este correcto'
                                        }
                                    })}
                                />
                                {errors.email && (
                                    <span className="text-primary font-bold text-xs leading">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>

                            {/* PASSWORD */}
                            <div className="flex flex-col mb-3">
                                <label
                                    htmlFor="password"
                                    className="uppercase text-xs"
                                >
                                    contraseña
                                </label>
                                <div className="relative rounded-md">
                                    <input
                                        className="block w-full rounded-md outline-none h-8 text-secondary font-bold pl-2 bg-grey"
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
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-secondary"
                                    >
                                        {showPwd ? (
                                            <FontAwesomeIcon icon={faEye} />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={faEyeSlash}
                                            />
                                        )}
                                    </span>
                                </div>
                                {errors.password && (
                                    <span className="text-primary font-bold text-xs leading">
                                        {errors.password.message}
                                    </span>
                                )}
                            </div>

                            {/* CONFIRMACION DE PASSWORD */}
                            <div className="flex flex-col mb-3">
                                <label
                                    htmlFor="password2"
                                    className="uppercase text-xs"
                                >
                                    confirmar contraseña
                                </label>
                                <div className="relative rounded-md">
                                    <input
                                        className="block w-full rounded-md outline-none h-8 text-secondary font-bold pl-2 bg-grey"
                                        type={showPwd2 ? 'text' : 'password'}
                                        name="password2"
                                        id="password2"
                                        autoComplete="off"
                                        {...register('password2', {
                                            required: {
                                                value: true,
                                                message:
                                                    '* confirmar comtraseña es requerido'
                                            },
                                            validate: value =>
                                                value === watch('password') ||
                                                '* las contraseñas no coinciden'
                                        })}
                                    />
                                    <span
                                        onClick={() => setShowPwd2(!showPwd2)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 fill-red"
                                    >
                                        {showPwd2 ? (
                                            <FontAwesomeIcon icon={faEye} />
                                        ) : (
                                            <img
                                                src={EyeSlash}
                                                alt="Logo AutoGo"
                                            />
                                            // <FontAwesomeIcon
                                            //     icon={faEyeSlash}
                                            // />
                                        )}
                                    </span>
                                </div>
                                {errors.password2 && (
                                    <span className="text-primary font-bold text-xs leading">
                                        {errors.password2.message}
                                    </span>
                                )}
                            </div>
                            <div className="text-center">
                                <button
                                    // onClick={() => sendEmail()}
                                    type="submit"
                                    // disabled={emailSent ? 'disabled' : ''}
                                    className="bg-primary text-white px-16 py-2 rounded-lg uppercase font-modern mt-1"
                                >
                                    crear
                                </button>
                                <p className="mt-1 text-xs pt-2">
                                    Por favor, verifica tu registro a través del
                                    correo electrónico que hemos enviado a tu
                                    dirección de correo electrónico
                                </p>
                                <hr className="mt-5" />
                                <p className="mt-1 text-sm">
                                    {
                                        `Reenviar correo de confirmación 00:59`
                                    }
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register
