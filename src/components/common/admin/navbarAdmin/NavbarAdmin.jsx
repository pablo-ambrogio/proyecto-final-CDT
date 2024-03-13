import { useState } from "react";
import { NavLink } from "react-router-dom"
import IconCar from '../../../../assets/dashboard/dashboard-icon-car.svg'
import IconReserve from '../../../../assets/dashboard/dashboard-icon-reserve.svg'
import IconUser from '../../../../assets/dashboard/dashboard-icon-user.svg'
import IconConfig from '../../../../assets/dashboard/dashboard-icon-config.svg'
import PhotoProfile from "../photoProfile/PhotoProfile";
import BtnSignOff from "../btnSignOff/BtnSignOff";


const NavbarAdmin = () => {

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

    return (
        <>
            <nav className="text-[#010101] bg-grey">
                <div className="w-11/12 mx-auto pt-4 
                grid grid-rows-[10rem,1fr,5rem] min-h-screen
                ">
                    <div className="grid row-span-1">
                        <PhotoProfile />
                    </div>
                    <ul
                        className="uppercase flex flex-col gap-y-8 row-span-1"
                    >
                        <li>
                            <div
                                className="grid grid-cols-[4rem,1fr,3rem] place-items-center"
                                onClick={handleVehicle}
                            >
                                <img src={IconCar} alt="" className="w-8" />
                                <span className="justify-self-start">lista de vehiculos</span>
                                <span className="font-bold place-self-start ">+</span>
                            </div>
                            <ul className={`${!vehicle && "hidden"} text-[.75rem] w-full grid place-content-center pl-4`}>
                                <li>
                                    <NavLink to={"vehicles-list"}>agregar vehiculo</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"categories"}>Agregar categoria</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"characteristics"}>Administrar caracteristicas</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <div
                                className="grid grid-cols-[4rem,1fr,3rem] place-items-center"
                                onClick={handleCategory}
                            >
                                <img src={IconReserve} alt="" className="w-8" />
                                <span className="justify-self-start">reservas</span>
                                <span className="font-bold place-self-start ">+</span>
                            </div>
                            <ul className={`${!category && "hidden"} text-[.75rem] w-3/5 mx-auto grid place-content-start pl-2`}>
                                <li>
                                    <NavLink to={"reserve"}>agregar reserva</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <div
                                className="grid grid-cols-[4rem,1fr,3rem] place-items-center"
                                onClick={handleUser}
                            >
                                <img src={IconUser} alt="" className="w-8" />
                                <span className="justify-self-start">usuarios</span>
                                <span className="font-bold place-self-start ">+</span>
                            </div>
                            <ul className={`${!user && "hidden"} text-[.75rem] w-3/5 mx-auto grid place-content-start pl-2`}>
                                <li>
                                    <NavLink to={"add-users"}>agregar usuarios</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <div
                                className="grid grid-cols-[4rem,1fr,3rem] place-items-center"
                                onClick={handleConfiguration}
                            >
                                <img src={IconConfig} alt="" className="w-8" />
                                <span className="justify-self-start">configuracion</span>
                                <span className="font-bold place-self-start ">+</span>
                            </div>
                            <ul className={`${!config && "hidden"} text-[.75rem] w-3/5 mx-auto grid place-content-start pl-2`}>
                                <li>
                                    <NavLink to={"configuration"}>editar perfil</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="grid row-span-1">

                        <BtnSignOff />
                    </div>
                </div>
            </nav>
        </>

    )
}
export default NavbarAdmin