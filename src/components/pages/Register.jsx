import Logo from '../../assets/Logo 1.svg'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const Register = () => {
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
            html: '<p class = "text-blue text-xl font-bold" >Usuario creado con éxito</p>',
            showConfirmButton: false,
            timer: 2000
        })
        console.log(data)
        reset()
    })

    return (
        <>
            <section className="w-full m-auto flex items-center lg:h-full py-10">
                <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-1 mx-auto w-1/2 bg-grey p-2 rounded-lg">
                    <div className="grid col-1 text-center place-items-center hidden md:block ">
                        <img src={Logo} alt="Logo AutoGo" className="xs:w-1/5 xl:w-4/5 mx-auto" />
                    </div>
                    <div className="grid col-1 bg-blue place-items-center rounded">
                        <div className="w-4/5">
                            <h2 className="uppercase font-modern mt-4 text-xl">crear cuenta</h2>
                            <div className="text-sm p-2">
                                <form className="" onSubmit={handleSubmit(formSubmit)}>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col">
                                            {/* NOMBRE */}
                                            <label htmlFor="name" className="uppercase text-xs">
                                                nombre
                                            </label>
                                            <input
                                                className="bg-grey rounded-md h-8 text-blue p-2 font-bold"
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="true"
                                                {...register('name', {
                                                    required: { value: true, message: '* este campo es obligatorio' },
                                                    minLength: {
                                                        value: 3,
                                                        message: '* el nombre debe tener al menos 3 caracteres'
                                                    },
                                                    maxLength: {
                                                        value: 20,
                                                        message: '* el nombre debe tener máximo 20 caracteres'
                                                    }
                                                })}
                                            />
                                            {errors.name && (
                                                <span className="text-red text-xs">{errors.name.message}</span>
                                            )}
                                        </div>

                                        {/* APELLIDO */}
                                        <div className="flex flex-col">
                                            <label htmlFor="lastname" className="uppercase text-xs">
                                                apellido
                                            </label>
                                            <input
                                                className="bg-grey rounded-md h-8 text-blue p-2 font-bold"
                                                type="text"
                                                name="lastname"
                                                id="lastname"
                                                autoComplete="true"
                                                {...register('lastname', {
                                                    required: { value: true, message: '* este campo es obligatorio' },
                                                    minLength: {
                                                        value: 3,
                                                        message: '* el apellido debe tener al menos 3 caracteres'
                                                    },
                                                    maxLength: {
                                                        value: 20,
                                                        message: '* el apellido debe tener máximo 20 caracteres'
                                                    }
                                                })}
                                            />
                                            {errors.lastname && (
                                                <span className="text-red text-xs">{errors.lastname.message}</span>
                                            )}
                                        </div>

                                        {/* CORREO */}
                                        <div className="flex flex-col">
                                            <label htmlFor="email" className="uppercase text-xs">
                                                E-mail
                                            </label>
                                            <input
                                                className="bg-grey rounded-md h-8 text-blue p-2 font-bold"
                                                type="email"
                                                name="email"
                                                id="email"
                                                autoComplete="true"
                                                {...register('email', {
                                                    required: { value: true, message: '* este campo es obligatorio' },

                                                    pattern: {
                                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                        message: '* por favor valide que el correo este correcto'
                                                    }
                                                })}
                                            />
                                            {errors.email && (
                                                <span className="text-red text-xs">{errors.email.message}</span>
                                            )}
                                        </div>

                                        {/* PASSWORD */}
                                        <div className="flex flex-col">
                                            <label htmlFor="password" className="uppercase text-xs">
                                                contraseña
                                            </label>
                                            <input
                                                className="bg-grey rounded-md h-8 text-blue p-2 font-bold"
                                                type="password"
                                                name="password"
                                                id="password"
                                                autoComplete="true"
                                                {...register('password', {
                                                    required: { value: true, message: '* este campo es obligatorio' },
                                                    minLength: {
                                                        value: 6,
                                                        message: '* la contraseña debe tener al menos 6 caracteres'
                                                    }
                                                })}
                                            />
                                            {errors.password && (
                                                <span className="text-red text-xs">{errors.password.message}</span>
                                            )}
                                        </div>

                                        {/* CONFIRMACION DE PASSWORD */}
                                        <div className="flex flex-col">
                                            <label htmlFor="password2" className="uppercase text-xs">
                                                confirmar contraseña
                                            </label>
                                            <input
                                                className="bg-grey rounded-md h-8 text-blue p-2 font-bold"
                                                type="password"
                                                name="password2"
                                                id="password2"
                                                autoComplete="true"
                                                {...register('password2', {
                                                    required: {
                                                        value: true,
                                                        message: '* confirmar comtraseña es requerido'
                                                    },
                                                    validate: value =>
                                                        value === watch('password') || '* las contraseñas no coinciden'
                                                })}
                                            />
                                            {errors.password2 && (
                                                <span className="text-red text-xs">{errors.password2.message}</span>
                                            )}
                                        </div>
                                        <div className="text-center mt-4">
                                            <button
                                                type="submit"
                                                className="bg-red text-white px-16 py-2 rounded-lg uppercase font-modern"
                                            >
                                                crear
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Register
