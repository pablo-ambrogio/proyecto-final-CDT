import { useContext, useEffect, useState } from 'react'
import Amarok from '../../../assets/amarok.webp'
import axios from 'axios'
import { Link } from 'react-router-dom'

import IconDelete from '../../../assets/dashboard/icon-delete.svg'
import IconUpdate from '../../../assets/dashboard/icon-modify.svg'
import { NavBarContext } from '../../../context/NavbarContext'


const VehiclesList = () => {

    const [vehicles, setVehicles] = useState([])

    const [data, setData] = useState({})

    const { searchDataForId } = useContext(NavBarContext)

    //#region FUNCIONES

    const handleChange = e => {
        const value = e.target.value
        const name = e.target.name
        setData({
            ...data,
            [name]: value
        })
    }

    const getVehicles = async () => {
        const { data } = await axios.get("http://localhost:3000/vehicles")
        setVehicles(data);
    }

    const deleteVehicle = async (id) => {
        await axios.delete("http://localhost:3000/vehicles/" + id)
    }

    const handleDelete = (id) => {
        const res = confirm("¿Estás seguro que deseas eliminarlo?")
        if (res) return deleteVehicle(id)
    }

    //#endregion

    useEffect(() => {
        getVehicles()
    }, [vehicles])


    return (
        <div className="h-screen text-blue max-w-7xl mx-auto p-4">

            <h1 className="text-xl font-semibold uppercase">Lista de vehiculos</h1>
            <div className='flex justify-end'>
                <Link to={"/admin/add-vehicle"}>
                    <button className='bg-blue text-white px-4 py-2 rounded-lg'>
                        <span>Agregar vehículo</span>
                    </button>
                </Link>
            </div>
            <table className="w-full text-xs mt-8 border border-blue">
                <thead className="uppercase text-center border border-blue">
                    <tr>
                        <th >
                            Marca
                        </th>
                        <th>
                            Modelo
                        </th>
                        <th >
                            Categoria
                        </th>
                        <th title='Serial carroceria'>
                            Srl. carroceria
                        </th>
                        <th title='Serial motor'>
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
                        <th >
                            operativos
                        </th>
                        <th >
                            observacion
                        </th>
                        <th >
                            descripción
                        </th>
                        <th >
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

                            let { brand, model, category, serialBody, serialMotor, color, year, plaque, operative, observation, description } = vehicle

                            return (

                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 uppercase text-center h-14" key={vehicle.id}>
                                    <td>
                                        {
                                            vehicle.id === data.id &&
                                                Object.entries(data).length > 0 ?
                                                <input type="text"
                                                    className='bg-white border border-blue'
                                                    name={"brand"}
                                                    value={data.brand}
                                                    onChange={handleChange}
                                                />
                                                :
                                                brand
                                        }
                                    </td>
                                    <td >
                                        {
                                            vehicle.id === data.id &&
                                                Object.entries(data).length > 0 ?
                                                <input type="text"
                                                    className='bg-white border border-blue'
                                                    name={"model"}
                                                    value={data.model}
                                                    onChange={handleChange}
                                                />
                                                :
                                                model
                                        }
                                    </td>
                                    <td>
                                        {category}
                                    </td>
                                    <td >
                                        {serialBody}
                                    </td>
                                    <td >
                                        {serialMotor}
                                    </td>
                                    <td >
                                        {color}
                                    </td>
                                    <td >

                                        {year}
                                    </td>
                                    <td>
                                        {plaque}
                                    </td>
                                    <td>
                                        {
                                            vehicle.id === data.id &&
                                                Object.entries(data).length > 0 ?
                                                <select id=""
                                                    name={"operative"}
                                                    value={data.operative}
                                                    onChange={handleChange}
                                                    className='bg-white'
                                                >
                                                    <option value={true}>si</option>
                                                    <option value={false}>no</option>
                                                </select>
                                                :
                                                operative || operative === "true" ? "Si" : "No"
                                        }
                                    </td>
                                    <td>
                                        {
                                            vehicle.id === data.id &&
                                                Object.entries(data).length > 0 ?
                                                <input type="text"
                                                    className='bg-white border border-blue'
                                                    name={"observation"}
                                                    value={data.observation}
                                                    onChange={handleChange}
                                                />
                                                :
                                                observation
                                        }
                                    </td>
                                    <td >
                                        {
                                            vehicle.id === data.id &&
                                                Object.entries(data).length > 0 ?
                                                <input type="text"
                                                    className='bg-white border border-blue'
                                                    name={"description"}
                                                    value={data.description}
                                                    onChange={handleChange}
                                                />
                                                :
                                                description
                                        }
                                    </td>
                                    <td>
                                        <img src={Amarok} alt="Foto de vehículo cargado" width={80} />
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