import Xmark from '../../../assets/xmark-solid.svg'

const ModalContainer = ({ children, state, setState }) => {
    

    return (
        <>
            {state && (
                <div className="w-screen h-screen fixed top-0 left-0 bg-darkgrey bg-opacity-60 flex justify-center items-center">
                    <div className="bg-secondary min-h-[100px] relative rounded-md p-0">
                        <button
                            className="absolute right-[16%] top-[5%] md:right-[8%] lg:right-[3%] lg:top-[5%]  w-7 h-15 cursor-pointer border-0 ease-in-out duration-300 rounded text-white 
                            hover:text-secondary"
                        >
                            <img
                                onClick={() => setState(false)}
                                src={Xmark}
                                alt="cerrar"
                            />
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalContainer
