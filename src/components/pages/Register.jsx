import Logo from '../../assets/Logo 1.svg'
// import { useForm } from 'react-hook-form'

const Register = () => {
    // const {
    //     register,
    //     formState: { errors },
    //     handleSubmit
    // } = useForm()


    return (
        <>
            <section className="w-full m-auto flex items-center lg:h-full py-10">
                <div className="grid grid-cols-2 grid-rows-1 mx-auto w-1/2 bg-grey p-2 rounded-lg">
                    <div className="grid col-span-1 text-center place-items-center">
                        <img
                            src={Logo}
                            alt="Logo AutoGo"
                            className="xl:w-4/5 mx-auto"
                        />
                    </div>
                    <div className="grid col-span-1 bg-blue place-items-center rounded">
                        <div className="w-4/5">
                            <h2 className="uppercase font-modern mt-4 text-xl">
                                crear cuenta
                            </h2>
                            <div className='uppercase text-sm p-2'>
                                <form
                                    className=""
                                // onsSubmit={handleSubmit(insert)}
                                >
                                    <div
                                        className='flex flex-col gap-2'
                                    >

                                        <div className="flex flex-col">
                                            <label
                                                htmlFor="name"
                                            >
                                                nombre
                                            </label>
                                            <input
                                                className="bg-grey rounded-md h-8 text-blue"
                                                type="text"
                                                name="name"
                                                id="name"
                                            // {...register('validation', {
                                            //     required: true,
                                            //     minLength: 4
                                            // })}
                                            />
                                            {/* {errors.validation?.type ===
                                            'required' && (
                                            <p>ingrese un nombre</p>
                                        )} */}
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                htmlFor="lastname"
                                            >
                                                apellido
                                            </label>
                                            <input
                                                className="bg-grey rounded-md h-8 text-blue"
                                                type="text"
                                                name="lastname"
                                                id="lastname"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                htmlFor="user"
                                            >
                                                E-mail
                                            </label>
                                            <input
                                                className="bg-grey rounded-md h-8 text-blue"
                                                type="text"
                                                name="user"
                                                id="user"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                htmlFor="password"
                                            >
                                                contraseña
                                            </label>
                                            <input
                                                className="bg-grey rounded-md h-8 text-blue"
                                                type="password"
                                                name="password"
                                                id="password"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                htmlFor="password2"
                                            >
                                                confirmar contraseña
                                            </label>
                                            <input
                                                className="bg-grey rounded-md h-8 text-blue"
                                                type="password"
                                                name="password2"
                                                id="password2"
                                            />
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