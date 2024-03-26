import Xmark from '../../../assets/xmark-solid.svg'

const ModalContainer = ({ children, state, setState }) => {
    return (
        <>
            {state && (
                <div className="w-screen h-screen fixed top-0 left-0 bg-darkgrey bg-opacity-60 flex justify-center items-center p-6">
                    <div className="w-100 min-h-[100px] relative rounded-md p-0">
                        <button
                            className="absolute top-7 right-7 w-9 h-15 cursor-pointer border-0 ease-in-out duration-300 rounded text-white font-bold
                                hover:text-blue"
                        >
                            <img
                                onClick={() => setState(false)}
                                className="bg-grey rounded"
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
