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
            <section className="w-full m-auto h-full flex items-center">
                <div className="grid grid-cols-2 mx-auto bg-grey p-2 rounded-lg">
                    <div className="grid col-span-1 text-center place-items-center h-full">
                        <img
                            src={Logo}
                            alt="Logo AutoGo"
                            className="xl:w-1/2 lg:w-4/5 mx-auto"
                        />
                    </div>
                    <div className="grid col-span-1 bg-blue place-items-center rounded">
                        <div className="w-4/5">
                            <h2 className="uppercase font-modern mt-4">
                                iniciar sesión
                            </h2>
                            <p className="mt-1">inicie sesión para continuar</p>
                            <div>
                                <form
                                    className=""
                                    // onsSubmit={handleSubmit(insert)}
                                >
                                    <div className="flex flex-col my-3">
                                        <label
                                            htmlFor="name"
                                            className="text-sm"
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
                                    <div className="flex flex-col my-3">
                                        <label
                                            htmlFor="lastname"
                                            className="text-sm"
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
                                    <div className="flex flex-col my-3">
                                        <label
                                            htmlFor="user"
                                            className="text-sm"
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
                                    <div className="flex flex-col my-3">
                                        <label
                                            htmlFor="password"
                                            className="text-sm"
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
                                            className="text-sm"
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
                                            className="bg-red text-white px-14 pt-2 rounded-lg mb-4 uppercase"
                                        >
                                            crear
                                        </button>
                                        <hr />´
                                        <p className="pb-4">
                                            reenviar correo de confirmación
                                        </p>
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