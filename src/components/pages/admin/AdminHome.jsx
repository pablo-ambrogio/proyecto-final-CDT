import { useNavigate } from 'react-router-dom'
import CarAdminHome from '../../../assets/car-admin-home.svg'
import CarAdminReserve from '../../../assets/car-admin-reserve.svg'
import CarAdminUser from '../../../assets/car-admin-users.svg'

const AdminHome = () => {

    const navigate = useNavigate()
    return (
        <main
            className='h-full py-8'
        >
            <section>
                <div
                    className='w-4/5 mx-auto mb-4'
                >
                    <h1
                        className="uppercase text-2xl text-blue"
                    >admin</h1>
                </div>
                <div
                    className='flex justify-center gap-x-8 text-blue w-4/5 mx-auto rounded-lg bg-red py-8'
                >
                    <article
                        className='w-[20rem] text-center bg-grey flex flex-col items-center py-8 rounded-lg'
                    >
                        <img src={CarAdminHome} alt="" className='w-48 h-48' />
                        <div
                            className='w-3/4 flex flex-col justify-between h-full  gap-y-8'
                        >
                            <p>Esta sección permite al administrador gestionar todos los vehículos disponibles para alquilar. Puede ver una lista de todos los vehículos, agregar nuevos vehículos, editar los detalles de los vehículos existentes y eliminar vehículos.</p>
                            <form>
                                <button
                                    className='first-letter:uppercase bg-blue text-white px-8 py-2 rounded-lg'
                                    onClick={() => {
                                        navigate("/vehicles-list") 
                                    }}
                                >listar vehiculos</button>
                            </form>
                        </div>
                    </article>
                    <article
                        className='w-[20rem] text-center bg-grey flex flex-col items-center py-8 rounded-lg'
                    >
                        <img src={CarAdminReserve} alt="" className='w-48 h-48 p-4' />
                        <div
                            className='w-3/4 flex flex-col justify-between h-full gap-y-8'
                        >
                            <p>Esta sección permite al administrador gestionar todos los vehículos disponibles para alquilar. Puede ver una lista de todos los vehículos, agregar nuevos vehículos, editar los detalles de los vehículos existentes y eliminar vehículos.</p>
                            <form>
                                <button
                                    className='first-letter:uppercase bg-blue text-white px-8 py-2 rounded-lg'
                                >listar vehiculos</button>

                            </form>
                        </div>
                    </article>
                    <article
                        className='w-[20rem] text-center bg-grey flex flex-col items-center py-8 rounded-lg'
                    >
                        <img src={CarAdminUser} alt="" className='w-48 h-48' />
                        <div
                            className='w-3/4 flex flex-col justify-between h-full gap-y-8'
                        >
                            <p>Esta sección permite al administrador gestionar todos los vehículos disponibles para alquilar. Puede ver una lista de todos los vehículos, agregar nuevos vehículos, editar los detalles de los vehículos existentes y eliminar vehículos.</p>
                            <form>
                                <button
                                    className='first-letter:uppercase bg-blue text-white px-8 py-2 rounded-lg'
                                >listar vehiculos</button>

                            </form>
                        </div>
                    </article>
                </div>
            </section>

        </main>
    )
}
export default AdminHome