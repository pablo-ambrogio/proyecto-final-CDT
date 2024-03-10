import LogoShort from '../../assets/Logo_Short 2.svg'

const Login = () => {
    return (
        <>
            <section className="m-auto h-full flex items-center">
                <div className="grid grid-cols-2 h-4/5 2xl:h-3/5 lg:w-2/4 sm:w-3/4 mx-auto bg-grey p-2 rounded-lg">
                    <div className="grid col-span-1 text-center place-items-center h-full">
                        <img src={LogoShort} alt="Logo AutoGo" className="xl:w-3/5 w-2/4 mx-auto" />
                    </div>
                    <div className="grid col-span-1 bg-red place-items-center rounded">
                        <div className="w-4/5 uppercase h-4/5 text-sm flex flex-col justify-evenly">
                            <div>
                                <h2 className="font-modern text-lg">iniciar sesión</h2>
                                <p className="mt-2">inicie sesión para continuar</p>
                            </div>
                            <div>
                                <form className="my-4">
                                    <div className="flex flex-col gap-6 ">
                                        <div className="flex flex-col">
                                            <label htmlFor="user" className="uppercase text-xs">
                                                E-mail
                                            </label>
                                            <input
                                                className="bg-grey rounded-md h-8 outline-none text-blue px-2 font-bold"
                                                type="text"
                                                name="user"
                                                id="user"
                                                autoComplete="off"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="password" className="uppercase text-xs">
                                                contraseña
                                            </label>
                                            <input
                                                className="bg-grey rounded-md h-8 outline-none text-blue px-2 font-bold"
                                                type="password"
                                                name="password"
                                                id="password"
                                                autoComplete="off"

                                            />
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
