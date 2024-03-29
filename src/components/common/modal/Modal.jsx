import Xmark from '../../../assets/xmark-solid.svg'

const ModalContainer = ({ children, state, setState }) => {


    return (
        <>
            {state && (
                <div className="w-screen h-screen fixed top-0 left-0 bg-darkgrey bg-opacity-60 flex justify-center items-center">
                    <div className="w-100 min-h-[100px] relative rounded-md p-0">
                        <button
                            className="absolute right-[6%] lg:right-[3%] lg:top-[5%] top-[4%] w-7 h-15 cursor-pointer border-0 ease-in-out duration-300 rounded text-white 
                            hover:text-secondary"
                        >
                            <img
                                onClick={() => setState(false)}
                                className=""
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
