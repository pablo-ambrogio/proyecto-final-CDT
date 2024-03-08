import LogoShort from '../../../assets/Logo_Short 2.svg'

const LoginAdmin = () => {
    return (
        <main className="w-full grid h-screen place-items-center">
            <div className="flex items-center justify-center bg-grey p-2 rounded-lg">
                <img src={LogoShort} alt="Logo AutoGo" className="flex size-72 mx-10" />
                <div className="bg-red p-12 rounded">
                    <h2 className="uppercase font-modern">admin login</h2>
                    <p className="text-xs mb-10">Please login to continue</p>
                    <form className="">
                        <div className="flex flex-col my-3">
                            <label htmlFor="admin" className="text-xs">
                                Admin id
                            </label>
                            <input className="bg-grey rounded-md" type="text" name="admin" id="admin" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="text-xs">
                                Password
                            </label>
                            <input className="bg-grey rounded-md" type="password" name="password" id="password" />
                        </div>
                        <div className="flex justify-center items-center">
                            <button type="submit" className="my-3 first-letter:uppercase bg-blue text-white px-12 py-2 rounded-lg font-modern">
                                login
                            </button>
                        </div>
                    </form>
                    <p className="text-xs my-5">Forgot password?</p>
                    <hr />
                </div>
            </div>
        </main>
    )
}

export default LoginAdmin
