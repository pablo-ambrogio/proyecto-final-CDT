import LogoShort from '../../../assets/Logo_Short 2.svg'

const LoginAdmin = () => {
    return (
        <>
            <main className="container bg-grey mx-auto h-full border-red">
                <div className="flex border-2 border-blue w-50 p-3 ">
                    <img src={LogoShort} alt="Logo AutoGo" />
                    <div className="bg-red p-5 rounded m-2">
                        <h2 className="uppercase">admin login</h2>
                        <p>Please login to continue</p>
                        <form className="">
                            <div className="flex">
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
            </main>

            <div className="bg-white border-2 border-red">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stop-color="#7775D6" />
                                    <stop offset="1" stop-color="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Boost your productivity.
                                <br />
                                Start using our app today.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-white">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" width="1824" height="1080" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginAdmin
