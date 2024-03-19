import { Outlet } from "react-router-dom"
import NavbarAdmin from "../../common/admin/navbarAdmin/NavbarAdmin"
import { useContext } from "react"
import { NavBarContext } from "../../../context/NavbarContext"

const AdminHome = () => {

    const { viewNavbar } = useContext(NavBarContext)

    return (
        <section className="grid min-h-screen grid-rows-1">

            <section
                className={`grid 
                ${viewNavbar ? "grid-cols-[20rem,1fr]" : "grid-cols-[8rem,1fr]"}
            row-span-1 `}
            >
                <article className="grid col-span-1">
                    <NavbarAdmin />
                </article>
                <article
                    className="grid col-span-1"
                >
                    <Outlet />
                </article>
            </section>
        </section>
    )
}
export default AdminHome
