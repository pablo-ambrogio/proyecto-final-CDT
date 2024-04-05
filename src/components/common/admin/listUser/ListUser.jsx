import { useEffect, useState } from "react"
import IconDelete from '../../../../assets/dashboard/icon-delete.svg'
import IconUpdate from '../../../../assets/dashboard/icon-modify.svg'
import { Link } from "react-router-dom"

const ListUser = () => {
    const [users, setUsers] = useState([])

    const [userDelete, setUserDelete] = useState(false)

    const getUsers = async () => {
        try {
            const response = await fetch("http://localhost:8084/user/list");
            const data = await response.json();
            // console.log(data);
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async id => {

        const settings = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await fetch(`http://localhost:8084/user/delete/${id}`, settings)
            await response.json()
            // console.log(data);
        } catch (error) {
            console.error(error);
        }

        setUserDelete(true)
    }

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        getUsers()
        setUserDelete(false)
    }, [userDelete])


    return (
        <div className="h-screen">
            <section
                className="w-full grid justify-center mt-8 uppercase"
            >
                <table>
                    <thead className="uppercase text-center border border-secondary text-[#010101]">
                        <tr className="grid grid-cols-[120px,120px,120px,1fr,120px,120px] ">
                            <th className="col-span-1">
                                username
                            </th>
                            <th className="col-span-1 border-x">
                                apellido
                            </th>
                            <th className="col-span-1">
                                nombre
                            </th>
                            <th className="col-span-1 border-x">
                                email
                            </th>
                            <th className="col-span-1">
                                role
                            </th>
                            <th className="col-span-1 border-l">
                                acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border text-[#010101]">
                        {
                            users.map(user => {
                                return (
                                    <tr className="grid grid-cols-[120px,120px,120px,200px,120px,120px] border-1" key={user.id}>
                                        <td className="col-span-1 pl-2">
                                            {user.username}
                                        </td>
                                        <td className="col-span-1 border-x pl-2">
                                            {user.apellido}
                                        </td>
                                        <td className="col-span-1 pl-2">
                                            {user.nombre}
                                        </td>
                                        <td className="col-span-1 border-x pl-2">
                                            {user.email}
                                        </td>
                                        <td className="col-span-1 pl-2">
                                            {user.role}
                                        </td>
                                        <td className="col-span-1 border-l pl-2">
                                            <div className="flex justify-around items-center">
                                                <span
                                                >
                                                    <button
                                                        onClick={() => handleDelete(user.id)}
                                                    >
                                                        <img src={IconDelete} alt="icono de botín eliminar" title='eliminar' />
                                                    </button>
                                                </span>
                                                <Link to={`../list-vehicle/${user.id}`}>
                                                    <button
                                                    // onClick={() => searchDataForId(user.id)}
                                                    >
                                                        <img src={IconUpdate} alt="icono de botón modificar" title='modificar' />
                                                    </button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </div >
    )
}
export default ListUser