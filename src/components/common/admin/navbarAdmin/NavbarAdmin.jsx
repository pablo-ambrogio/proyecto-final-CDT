import { useContext, useState } from "react";
import { NavLink } from "react-router-dom"
import IconCar from '../../../../assets/dashboard/dashboard-icon-car.svg'
import IconReserve from '../../../../assets/dashboard/dashboard-icon-reserve.svg'
import IconUser from '../../../../assets/dashboard/dashboard-icon-user.svg'
import IconConfig from '../../../../assets/dashboard/dashboard-icon-config.svg'
import PhotoProfile from "../photoProfile/PhotoProfile";
import BtnSignOff from "../btnSignOff/BtnSignOff";
import { NavBarContext } from "../../../../context/NavbarContext";


const NavbarAdmin = () => {

    // const [viewNavbar, setViewNavbar] = useState(false)

    const {
        viewNavbar,
        handleMouseEnter,
        handleMouseLeave
    } = useContext(NavBarContext)

    const [vehicle, setVehicle] = useState(false)
    const [category, setCategory] = useState(false)
    const [user, setUser] = useState(false)
    const [config, setConfig] = useState(false)


    const handleVehicle = () => {
        setVehicle(!vehicle)
        setCategory(false)
        setUser(false)
        setConfig(false)
    }

    const handleCategory = () => {
        setCategory(!category)
        setUser(false)
        setVehicle(false)
        setConfig(false)
    }

    const handleUser = () => {
        setUser(!user)
        setCategory(false)
        setVehicle(false)
        setConfig(false)
    }

    const handleConfiguration = () => {
        setConfig(!config)
        setCategory(false)
        setVehicle(false)
        setUser(false)
    }

    // const handleMouseEnter = () => {
    //     setViewNavbar(true)
    // }

    // const handleMouseLeave = () => {
    //     setViewNavbar(false)
    // }


    return (
        <>
            <nav className="text-[#010101] bg-grey"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="w-11/12 pt-4 
                grid grid-rows-[10rem,1fr,5rem] min-h-screen
                ">
                    <div className="grid row-span-1 justify-center">
                        <PhotoProfile
                            viewNavbar={viewNavbar}
                        />
                    </div>
                    <ul
                        className="uppercase flex flex-col gap-y-8 row-span-1"
                    >
                        <li>
                            <div
                                className={`grid grid-cols-[4rem,1fr,3rem] place-items-center`}
                                onClick={handleVehicle}
                            >
                                <img src={IconCar} alt="" className={`${viewNavbar ? "" : "col-span-3 justify-self-center"} w-8`} />
                                {
                                    viewNavbar &&
                                    <>
                                        <span className={`justify-self-start`}>vehiculos</span>
                                        <span>
                                            {
                                                !vehicle ?
                                                    <span className="font-bold place-self-start text-lg">+</span>
                                                    :
                                                    <span className="font-bold place-self-start text-lg">-</span>
                                            }
                                        </span>
                                    </>

                                }

                            </div>

                            {
                                viewNavbar &&
                                <>
                                    <ul className={`${!vehicle && "hidden"} text-[.75rem] w-4/5 mx-auto grid place-content-center pl-4`}>
                                        <li>
                                            <NavLink to={"add-vehicle"}>agregar vehiculo</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"vehicles-list"}>Lista de vehiculos</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"categories"}>Agregar categoria</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"characteristics"}>Administrar caracteristicas</NavLink>
                                        </li>
                                    </ul>
                                </>
                            }

                        </li>

                        <li>
                            <div
                                className="grid grid-cols-[4rem,1fr,3rem] place-items-center"
                                onClick={handleCategory}
                            >
                                <img src={IconReserve} alt="" className={`${viewNavbar ? "" : "col-span-3 justify-self-center"} w-8`} />
                                {
                                    viewNavbar &&
                                    <>
                                        <span className="justify-self-start">reservas</span>
                                        <div>
                                            {
                                                !category ?
                                                    <span className="font-bold place-self-start text-lg">+</span>
                                                    :
                                                    <span className="font-bold place-self-start text-lg">-</span>
                                            }
                                        </div>

                                    </>
                                }

                            </div>
                            {
                                viewNavbar &&
                                <>
                                    <ul className={`${!category && "hidden"} text-[.75rem] w-3/5 mx-auto grid place-content-start pl-[.33rem]`}>
                                        <li>
                                            <NavLink to={"reserve"}>agregar reserva</NavLink>
                                        </li>
                                    </ul>
                                </>
                            }

                        </li>

                        <li>
                            <div
                                className="grid grid-cols-[4rem,1fr,3rem] place-items-center"
                                onClick={handleUser}
                            >
                                <img src={IconUser} alt="" className={`${viewNavbar ? "" : "col-span-3 justify-self-center"} w-8`} />
                                {
                                    viewNavbar &&
                                    <>
                                        <span className="justify-self-start">usuarios</span>
                                        <div>
                                            {
                                                !user ?
                                                    <span className="font-bold place-self-start text-lg">+</span>
                                                    :
                                                    <span className="font-bold place-self-start text-lg">-</span>
                                            }
                                        </div>
                                    </>

                                }

                            </div>
                            {
                                viewNavbar &&
                                <>

                                    <ul className={`${!user && "hidden"} text-[.75rem] w-3/5 mx-auto grid place-content-start pl-[.33rem]`}>
                                        <li>
                                            <NavLink to={"add-users"}>agregar usuarios</NavLink>
                                        </li>
                                    </ul>
                                </>
                            }

                        </li>

                        <li>
                            <div
                                className="grid grid-cols-[4rem,1fr,3rem] place-items-center"
                                onClick={handleConfiguration}
                            >
                                <img src={IconConfig} alt="" className={`${viewNavbar ? "" : "col-span-3 justify-self-center"} w-8`} />
                                {
                                    viewNavbar &&
                                    <>
                                        <span className="justify-self-start ">configuracion</span>
                                        <div>
                                            {
                                                !config ?
                                                    <span className="font-bold place-self-start text-lg">+</span>
                                                    :
                                                    <span className="font-bold place-self-start text-lg">-</span>
                                            }
                                        </div>
                                    </>
                                }

                            </div>
                            {
                                viewNavbar && <>
                                    <ul className={`${!config && "hidden"} text-[.75rem] w-3/5 mx-auto grid place-content-start pl-[.33rem]`}>
                                        <li>
                                            <NavLink to={"configuration"}>editar perfil</NavLink>
                                        </li>
                                    </ul>
                                </>
                            }

                        </li>
                    </ul>
                    <div className="grid row-span-1">
                        <BtnSignOff />
                    </div>
                </div>
            </nav >
        </>

    )
}
export default NavbarAdmin