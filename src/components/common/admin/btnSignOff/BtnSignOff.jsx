import { useContext } from "react";
import IconSingOut from "../../../../assets/dashboard/dashboard-icon-cerrar-sesion.svg";
import { NavBarContext } from "../../../../context/NavbarContext";
import { useNavigate } from 'react-router-dom'

const BtnSignOff = () => {
    const { viewNavbar } = useContext(NavBarContext);
    const navigate = useNavigate()

    const handleSignOff = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
        <>
            <button
                className={`${viewNavbar
                    ? "text-lg w-4/5 mx-auto gap-x-2 "
                    : "text-sm w-full"
                    } flex justify-center items-center uppercase text-secondary bg-grey font-bold`}
                onClick={handleSignOff}
            >
                {viewNavbar ? (
                    <>
                        <img
                            src={IconSingOut}
                            alt="icon sing off"
                            width={18}
                        />
                        <span className={`${!viewNavbar && "flex-none"}`}>
                            cerrar sesión
                        </span>
                    </>
                ) : (
                    <img src={IconSingOut} alt="icon sing off" width={18} />
                )}
            </button>
        </>
    );
};
export default BtnSignOff;
