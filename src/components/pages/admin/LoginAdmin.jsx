import LogoShort from '../../../assets/Logo_Short 2.svg'

const LoginAdmin = () => {
    return (
        <>
            <div className="">
                <div className="flex">
                    <img src={LogoShort} alt="Logo AutoGo" />
                    <div className="bg-red p-5">
                        <h2 className="uppercase">admin login</h2>
                        <p>Please login to continue</p>
                        <form className="">
                            <div className="">
                                <label htmlFor="admin">Admin id</label>
                                <input className="bg-grey" type="text" name="admin" id="admin" />
                            </div>
                            <div className="">
                                <label htmlFor="password">Password</label>
                                <input className="bg-grey" type="password" name="password" id="password" />
                            </div>
                            <button type="submit" className="bg-blue uppercase">
                                login
                            </button>
                        </form>
                        <p>Forgot password?</p>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginAdmin
