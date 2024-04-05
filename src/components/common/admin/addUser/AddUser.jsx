import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    const [showPwd, setShowPwd] = useState(false)

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const AddUser = async (settings) => {

        console.log(settings);

        try {
            const response = await fetch('http://localhost:8084/user/add', settings)
            const data = await response.json()
            if (data.jwt) {
                console.log(data)
            }
        } catch (error) {
            console.error(error)
        }

    }

    const formSubmit = handleSubmit(data => {

        const payload = {
            username: data.username,
            password: data.password, //btoa(data.password)
            apellido: data.lastname,
            email: data.email,
            nombre: data.name,
            role: 'CUSTOMER'
        }
        for (const key in payload) {
            if (typeof payload[key] === 'string') {
                console.log(payload[key]);
                if (key == "role") {
                    payload[key] = payload[key].toUpperCase()
                }
                else {
                    payload[key] = payload[key].toLowerCase()
                }

            }
        }
        console.log(payload);

        const settings = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        AddUser(settings)
        console.log("password", payload);
        navigate("/admin/list-users")

    })

    return (
        <>
            {/* CONTENEDOR */}
            <div className="flex items-center h-full justify-center">
                <div className="bg-grey h-[30rem] px-12 py-4 rounded-md md:w-96 w-4/5 flex flex-col text-[#010101] justify-center">
                    {/* TÍTULO */}
                    <h2 className="text-2xl text-center mb-5">
                        Actualizar usuario
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
                                className="rounded-md outline-none h-8 text-secondary pl-2 bg-white"
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
                                <span className="text-primary text-xs leading">
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
                                className="rounded-md outline-none h-8 text-secondary pl-2 bg-white"
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
                                <span className="text-primary text-xs leading">
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
                                className="rounded-md outline-none h-8 text-secondary pl-2 bg-white"
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
                                <span className="text-primary text-xs leading">
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
                                className="rounded-md outline-none h-8 text-secondary pl-2 bg-white"
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
                                <span className="text-primary  text-xs leading">
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
                                    className="block w-full rounded-md outline-none h-8 text-secondary pl-2 bg-white"
                                    type={showPwd ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    autoComplete="off"
                                    {...register('password', {
                                        required: {
                                            value: true,
                                            message:
                                                'este campo es obligatorio'
                                        },
                                        pattern: {
                                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                                            message:
                                                'la contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un caracter especial'
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
                                <span className="text-primary text-xs">
                                    {errors.password.message}
                                </span>

                            )}
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-secondary text-white px-16 py-2 rounded-lg uppercase mt-1"
                            >
                                Agregar
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
export default AddUser