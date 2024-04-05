import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import LogoShort from '../../assets/Logo_Short 2.svg'
import { AuthAdminContext } from '../../context/AuthAdminContext'
import { useNavigate } from 'react-router-dom'
import { NavBarContext } from '../../context/NavbarContext'

const Login = () => {
    const [showPwd, setShowPwd] = useState(false)

    const { setAdmin } = useContext(AuthAdminContext)

    const { setModal1 } = useContext(NavBarContext)

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const loginUser = async settings => {
        console.log(settings);

        try {
            const response = await fetch("http://localhost:8084/auth/authenticate", settings)
            const data = await response.json()
            console.log(data);
            
            const ROLE = JSON.parse(atob(data.jwt.split('.')[1])).role
            console.log(ROLE);
            if (ROLE === "ADMIN") {
                setAdmin(true)
                navigate("/admin")
            } else {
                navigate("/")
            }
            localStorage.setItem("jwt", JSON.stringify(data.jwt))
            setModal1(false)
        } catch (error) {
            console.error(error);
        }

    }

    const formSubmit = handleSubmit(data => {
        console.log(data)
        for (const key in data) {
            if (typeof data[key] === "string") {
                if (!data.password) {
                    data[key] = data[key].toLowerCase()
                }
            }
        }

        const payload = {
            username: data.username,
            password: data.password
        }

        const settings = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        loginUser(settings)
        reset()
    })

    return (
        <>
            {/* CONTENEDOR */}
            <div className="flex justify-center">
                <div className="flex bg-grey p-4 rounded-md w-4/5 md:w-full lg:w-full">
                    {/* BLOQUE IMAGEN IZQUIERDA */}
                    <div className="p-5 rounded-md hidden lg:block">
                        <img
                            className="object-scale-down h-full w-96 items-center"
                            src={LogoShort}
                            alt="Logo AutoGo"
                        />
                    </div>

                    {/* BLOQUE FORMULARIO DERECHA */}
                    <div className="bg-primary text-white p-12 rounded-md w-96 flex flex-col justify-center">
                        {/* TÍTULO */}
                        <div>
                            <h2 className="font-modern text-2xl">
                                iniciar sesión
                            </h2>
                            <p className="mb-10 text-sm">
                                inicie sesión para continuar
                            </p>
                        </div>

                        {/* FORM */}
                        <form
                            className="flex flex-col"
                            onSubmit={handleSubmit(formSubmit)}
                        >
                            {/* USUARIO */}
                            {/* <div className="flex flex-col mb-3">
                                <label
                                    htmlFor="user"
                                    className="uppercase text-xs"
                                >
                                    E-mail
                                </label>
                                <input
                                    className="rounded-md outline-none h-8 text-secondar pl-2 text-secondary bg-grey"
                                    type="text"
                                    name="user"
                                    id="user"
                                    autoComplete="off"
                                    {...register('user', {
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
                                {errors.user && (
                                    <span className="text-secondar font-bold text-xs leading">
                                        {errors.user.message}
                                    </span>
                                )}
                            </div> */}
                            <div className="flex flex-col mb-3">
                                <label
                                    htmlFor="username"
                                    className="uppercase text-xs"
                                >
                                    username
                                </label>
                                <input
                                    className="rounded-md outline-none h-8 text-secondar pl-2 text-secondary bg-grey"
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    {...register('username', {
                                        required: {
                                            value: true,
                                            message:
                                                '* este campo es obligatorio'
                                        }
                                        // pattern: {
                                        //     value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        //     message:
                                        //         '* por favor valide que el username sea el correcto'
                                        // }
                                    })}
                                />
                                {errors.username && (
                                    <span className="text-secondar font-bold text-xs leading">
                                        {errors.username.message}
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
                                        className="block w-full rounded-md outline-none h-8 text-secondar pl-2 text-secondary bg-grey"
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
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-secondar"
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
export default Login
