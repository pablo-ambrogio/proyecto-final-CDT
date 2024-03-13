import { useForm } from 'react-hook-form'
import { pattern, message } from '../utils/validateForm'

const Login = () => {

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm()

    console.log(errors);

    const onSubmit = handleSubmit(data => {
        if (isValid) {
            console.log(data);
        }
        reset()
    })


    return (
        <section>
            <>
                <section className="m-auto h-full flex items-center">
                    <div className="grid grid-cols-2 h-4/5 2xl:h-3/5 lg:w-2/4 sm:w-3/4 mx-auto bg-grey p-2 rounded-lg">
                        <div className="grid col-span-1 text-center place-items-center h-full">
                            {/* <img src={LogoShort} alt="Logo AutoGo" className="xl:w-3/5 w-2/4 mx-auto" /> */}
                        </div>
                        <div className="grid col-span-1 bg-red place-items-center rounded">
                            <div className="w-4/5 uppercase h-4/5 text-sm flex flex-col justify-evenly">
                                <div>
                                    <h2 className="font-modern text-lg">iniciar sesión</h2>
                                    <p className="mt-2">inicie sesión para continuar</p>
                                </div>
                                <div>
                                    <form
                                        onSubmit={onSubmit}
                                    >
                                        <div className='flex flex-col gap-6 '>
                                            <div className="flex flex-col">
                                                <label htmlFor="email">E-mail</label>
                                                <input className="bg-grey rounded-md h-8 outline-none text-[#010101] px-2" type="email" name="email" id="email"

                                                    {...register("email",
                                                        {
                                                            required: message.req,
                                                            pattern: {
                                                                value: pattern.email,
                                                                message: message.email
                                                            }
                                                        }
                                                    )
                                                    }
                                                />
                                                {
                                                    errors.email && <span className='text-[0.7rem]'>{errors.email.message}</span>
                                                }
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="password">contraseña</label>
                                                <input className="bg-grey rounded-md h-8 outline-none text-[#010101] px-2" type="password" name="password" id="password"
                                                    {...register("password", {
                                                        required: message.req,
                                                        maxLength: {
                                                            value: 16,
                                                            message: message.password
                                                        },
                                                        minLength: {
                                                            value: 8,
                                                            message: message.password
                                                        },
                                                        pattern: {
                                                            value: pattern.password,
                                                            message: message.password
                                                        }

                                                    })}
                                                />
                                                {
                                                    errors.password && <span className='text-[0.7rem]'>{errors.password.message}</span>
                                                }
                                            </div>
                                            <div className="text-center mt-4">
                                                <button type="submit" className="bg-blue text-white px-16 py-2 rounded-lg uppercase font-modern">
                                                    iniciar
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
        </section>
    )
}
export default Login