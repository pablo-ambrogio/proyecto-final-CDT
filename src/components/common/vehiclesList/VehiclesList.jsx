import { useContext, useEffect, useState } from 'react'
import Amarok from '../../../assets/amarok.webp'
import Icon from '../../../assets/iconauto.png'
import { Link } from 'react-router-dom'

import IconDelete from '../../../assets/dashboard/icon-delete.svg'
import IconUpdate from '../../../assets/dashboard/icon-modify.svg'
import { NavBarContext } from '../../../context/NavbarContext'





const VehiclesList = () => {

    const [vehicles, setVehicles] = useState([])
    const [vehicleDelete, setVehicleDelete] = useState(false)


    const { searchDataForId } = useContext(NavBarContext)

    const getVehicles = async () => {
        try {
            const response = await fetch("http://localhost:8084/vehiculo/list")
            const data = await response.json()
            // console.log(data);
            setVehicles(data);
        } catch (error) {
            console.error(error);
        }
    }


    const handleDelete = async (id) => {

        const settings = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = confirm("¿Estás seguro que deseas eliminarlo?")
        if (res) {
            try {
                const response = await fetch(`http://localhost:8084/vehiculo/delete/${id}`, settings)
                await response.json()
            } catch (error) {
                console.error(error);
            }
        }
        setVehicleDelete(true)
    }


    useEffect(() => {
        getVehicles()
    }, [])

    useEffect(() => {
        getVehicles()
        setVehicleDelete(false)
    }, [vehicleDelete])



    return (
        <div className="h-screen text-secondary max-w-7xl mx-auto p-4">

            <h1 className="text-xl font-semibold uppercase">Lista de vehiculos</h1>
            <div className='flex justify-end'>
                <Link to={"/admin/add-vehicle"}>
                    <button className='bg-secondary text-white px-4 py-2 rounded-lg'>
                        <span>Agregar vehículo</span>
                    </button>
                </Link>
            </div>
            <table className="w-full text-xs mt-8 border border-secondary">
                <thead className="uppercase text-center border border-secondary">
                    <tr>
                        <th>
                            Marca
                        </th>
                        <th>
                            Modelo
                        </th>
                        <th >
                            Categoria
                        </th>
                        <th>
                            Srl. motor
                        </th>
                        <th >
                            color
                        </th>
                        <th >
                            año
                        </th>
                        <th >
                            placa
                        </th>
                        <th>
                            operativo
                        </th>
                        <th>
                            observacion
                        </th>
                        <th>
                            fotos
                        </th>
                        <th >
                            acciones
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        vehicles.map(vehicle => {

                            return (

                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 uppercase text-center h-14" key={vehicle.id}>
                                    <td>
                                        {/* {
                                            vehicle.id === data.id &&
                                                Object.entries(data).length > 0 ?
                                                <input type="text"
                                                    className='bg-white border border-secondary'
                                                    name={"brand"}
                                                    value={data.marca}
                                                    onChange={handleChange}
                                                />
                                                :
                                                marca
                                        } */}
                                        {vehicle.marca}
                                    </td>
                                    <td>
                                        {/* {
                                            vehicle.id === data.id &&
                                                Object.entries(data).length > 0 ?
                                                <input type="text"
                                                    className='bg-white border border-secondary'
                                                    name={"model"}
                                                    value={data.modelo}
                                                    onChange={handleChange}
                                                />
                                                :
                                                modelo
                                        } */}
                                        {vehicle.modelo}
                                    </td>
                                    <td>
                                        {vehicle.categoria.titulo}
                                    </td>
                                    <td>
                                        {vehicle.serialMotor}
                                    </td>
                                    <td >
                                        {vehicle.color}
                                    </td>
                                    <td>

                                        {vehicle.year}
                                    </td>
                                    <td>
                                        {vehicle.matricula}
                                    </td>
                                    <td>
                                        {/* {
                                            vehicle.id === data.id &&
                                                Object.entries(data).length > 0 ?
                                                <select id=""
                                                    name={"operative"}
                                                    value={data.isDisponible}
                                                    onChange={handleChange}
                                                    className='bg-white'
                                                >
                                                    <option value={true}>si</option>
                                                    <option value={false}>no</option>
                                                </select>
                                                :
                                                isDisponible || isDisponible === "true" ? "Si" : "No"
                                        } */}
                                        {vehicle.isDisponible ? "Si" : "No"}
                                    </td>
                                    <td>
                                        {/* {
                                            vehicle.id === data.id &&
                                                Object.entries(data).length > 0 ?
                                                <input type="text"
                                                    className='bg-white border border-secondary'
                                                    name={"observation"}
                                                    value={data.observacion}
                                                    onChange={handleChange}
                                                />
                                                :
                                                observacion
                                        } */}
                                        {vehicle.observacion}
                                    </td>
                                    <td>
                                        <img src={Icon} alt="Foto de vehículo cargado" width={80} />
                                    </td>
                                    <td
                                        className='flex justify-around items-center h-14 uppercase'
                                    >
                                        <span
                                        >
                                            <button
                                                onClick={() => handleDelete(vehicle.id)}
                                            >
                                                <img src={IconDelete} alt="icono de botín eliminar" title='eliminar' />
                                                {/* <span>Eliminar</span> */}
                                            </button>
                                        </span>
                                        <Link to={`../add-vehicle/${vehicle.id}`}>
                                            <button
                                                onClick={() => searchDataForId(vehicle.id)}
                                            >
                                                <img src={IconUpdate} alt="icono de botón modificar" title='modificar' />
                                            </button>
                                        </Link>
                                    </td>
                                </tr>

                            )
                        })
                    }

                </tbody>
            </table>

        </div >

    )
}
export default VehiclesList
