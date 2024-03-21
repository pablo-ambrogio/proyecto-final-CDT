import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import Logo from '../../assets/Logo 1.svg'
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
        // reset
    } = useForm()

    const formSubmit = handleSubmit(data => {
        Swal.fire({
            icon: 'success',
            html: '<p class = "text-blue text-xl font-bold" >Usuario creado con éxito</p>',
            showConfirmButton: false,
            timer: 2000
        })
        console.log(data)

        for (const key in data) {
            if (typeof data[key] === 'string') {
                data[key] = data[key].toLowerCase()
            }
        }

        // para prueba
        // axios.post('http://localhost:3000/users', data)

        // axios.post('http://localhost:4000/nodemailer', {
        //     email: data.email,
        //     name: `${data.name} ${data.lastname}`
        // })
        // hasta la prueba
        // reset()

        // desde aqui el nuevo codigo

        sendEmail()
    })

    const sendEmail = async () => {
        const from = 'proyectoautogo@gmail.com'
        const to = 'mhenaor@gmail.com'
        const subject = 'Test Email'
        const body = 'This is a test email sent from React.'

        const emailData = { from, to, subject, body }
        try {
            const response = await axios.post(
                'http://localhost:8080/mail/send/' + to,
                emailData
            )
            if (response.status === 200) {
                setEmailSent(true)
                console.log('Email enviado con éxito')
            } else {
                console.error('Error al enviar correo electrónico')
            }
        } catch (error) {
            console.error('Error al enviar correo electrónico: ', error)
        }
    }

    // const sendEmail = async () => {
    //     await axios.post('http://localhost:4000/nodemailer', {
    //         email: 'mhenaor@gmail.com',
    //         name: 'Mauricio'
    //     })
    // }

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
                    <div className="bg-blue px-12 py-4 rounded-md w-96 flex flex-col justify-center">
                        {/* TÍTULO */}
                        <h2 className="font-modern text-2xl mb-5">
                            crear cuenta
                        </h2>

                        {/* FORM */}
                        <form
                            className="flex flex-col"
                            onSubmit={handleSubmit(formSubmit)}
                        >
                            {/* NOMBRE */}
                            <div className="flex flex-col mb-3">
                                <label
                                    htmlFor="name"
                                    className="uppercase text-xs"
                                >
                                    nombre
                                </label>
                                <input
                                    className="rounded-md outline-none h-8 text-blue font-bold pl-2 bg-grey"
                                    type="text"
                                    name="name"
                                    id="name"
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
                                    <span className="text-red font-bold text-xs leading">
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
                                    className="rounded-md outline-none h-8 text-blue font-bold pl-2 bg-grey"
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
                                    <span className="text-red font-bold text-xs leading">
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
                                    className="rounded-md outline-none h-8 text-blue font-bold pl-2 bg-grey"
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
                                    <span className="text-red font-bold text-xs leading">
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
                                        className="block w-full rounded-md outline-none h-8 text-blue font-bold pl-2 bg-grey"
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
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue"
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
                                    <span className="text-red font-bold text-xs leading">
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
                                        className="block w-full rounded-md outline-none h-8 text-blue font-bold pl-2 bg-grey"
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
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue"
                                    >
                                        {showPwd2 ? (
                                            <FontAwesomeIcon icon={faEye} />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={faEyeSlash}
                                            />
                                        )}
                                    </span>
                                </div>
                                {errors.password2 && (
                                    <span className="text-red font-bold text-xs leading">
                                        {errors.password2.message}
                                    </span>
                                )}
                            </div>
                            <div className="text-center">
                                <button
                                    // onClick={() => sendEmail()}
                                    type="submit"
                                    className="bg-red text-white px-16 py-2 rounded-lg uppercase font-modern mt-1"
                                >
                                    crear
                                </button>
                                <hr className="mt-5" />
                                <p className="mt-1 text-sm">
                                    Reenviar correo de confirmación
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
