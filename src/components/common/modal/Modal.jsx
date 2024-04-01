import Xmark from '../../../assets/xmark-solid.svg'

const ModalContainer = ({ children, state, setState }) => {


    return (
        <>
            {state && (
                <div className="w-screen h-screen fixed top-0 left-0 bg-darkgrey bg-opacity-60 flex justify-center items-center">
                    <div className="w-100 min-h-[100px] relative rounded-md p-0">
                        <button
<<<<<<< HEAD
                            className="absolute top-7 right-7 w-9 h-15 cursor-pointer border-0 ease-in-out duration-300 rounded text-white font-bold
                            hover:text-secondary"
                        >
                            <img onClick={() => setState(false)} className="bg-grey rounded" src={Xmark} alt="cerrar" />
=======
                            className="absolute right-[6%] lg:right-[3%] lg:top-[5%] top-[4%] w-7 h-15 cursor-pointer border-0 ease-in-out duration-300 rounded text-white 
                            hover:text-secondary"
                        >
                            <img
                                onClick={() => setState(false)}
                                className=""
                                src={Xmark}
                                alt="cerrar"
                            />
>>>>>>> 459398cdb3cd0d2c9fd20dbbc87bde8360041b98
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalContainer
