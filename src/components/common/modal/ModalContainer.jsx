import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const ModalContainer = ({ children, state, setState }) => {
    return (
        <>
            {state && (
                <div className="w-screen h-screen fixed top-0 left-0 bg-grey bg-opacity-90 flex justify-center items-center p-6">
                    <div className="w-100 min-h-[100px] relative rounded-md p-0">
                        <button
                            className="absolute top-[-30px] right-[-30px] w-5 h-5 cursor-pointer border-0 ease-in-out duration-300 rounded text-blue font-bold
                                hover:text-blue"
                            onClick={() => setState(false)}
                        >
                            <FontAwesomeIcon icon={faX} className="text-4xl" />
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalContainer
