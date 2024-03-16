import { Outlet } from "react-router-dom"
import NavbarAdmin from "../../common/admin/navbarAdmin/NavbarAdmin"

const AdminHome = () => {

    return (
        <section className="grid min-h-screen grid-rows-1">

            <section
                className="grid 
            grid-cols-[20rem,1fr] row-span-1"
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
