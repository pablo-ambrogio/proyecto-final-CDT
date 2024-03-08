import LogoShort from '../../assets/Logo_Short 2.svg'

const Login = () => {
    return (
        <>
            <section className="w-full m-auto bg-blue h-full">
                <div className="grid grid-cols-2 w-3/5 h-96 mx-auto bg-grey p-2 rounded-lg">
                    <div className='grid col-span-1 text-center place-items-center'>
                        <img src={LogoShort} alt="Logo AutoGo" className="w-3/5 mx-auto" />
                    </div>
                    <div className="grid col-span-1 bg-red place-items-center">
                        <div className='w-4/5'>
                            <h2 className="uppercase font-modern">iniciar sesión</h2>
                            <p className="mt-2">inicie sesión para continuar</p>
                            <div>
                                <form className="">
                                    <div className="flex flex-col my-3">
                                        <label htmlFor="user">
                                            correo
                                        </label>
                                        <input className="bg-grey rounded-md h-8" type="text" name="user" id="user" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="password">
                                            contraseña
                                        </label>
                                        <input className="bg-grey rounded-md h-8" type="password" name="password" id="password" />
                                    </div>
                                    <div className="text-center mt-4">
                                        <button type="submit" className="bg-blue text-white px-14 py-2 rounded-lg uppercase">
                                            iniciar
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* <hr />
                            <p className="text-xs my-5">Forgot password?</p> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
