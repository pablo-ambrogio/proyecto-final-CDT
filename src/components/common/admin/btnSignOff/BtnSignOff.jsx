import { useContext } from "react";
import IconSingOut from "../../../../assets/dashboard/dashboard-icon-cerrar-sesion.svg";
import { NavBarContext } from "../../../../context/NavbarContext";

const BtnSignOff = () => {
    const { viewNavbar } = useContext(NavBarContext);

    return (
        <>
            <button
                className={`${viewNavbar
                    ? "text-lg w-4/5 mx-auto gap-x-2 "
                    : "text-sm w-full"
                    } flex justify-center items-center uppercase text-blue bg-grey font-bold`}
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
