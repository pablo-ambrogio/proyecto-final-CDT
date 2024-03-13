import { useEffect, useState } from 'react'
import Amarok from '../../../assets/amarok.webp'
import axios from 'axios'

const VehiclesList = () => {

    const [vehicles, setVehicles] = useState([])

    const getVehicles = async () => {
        const { data } = await axios.get("http://localhost:3000/vehicles")
        setVehicles(data);
    }

    useEffect(() => {

        getVehicles()
        console.log(vehicles);

    }, [])


    return (
        <div className="relative overflow-x-auto h-screen text-blue max-w-7xl mx-auto pt-6">
            <h1 className="text-xl font-semibold uppercase">Lista de vehiculos</h1>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-8 border border-blue">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center border border-blue">
                    <tr>
                        <th scope="col" className="px-4 py-2">
                            N°
                        </th>
                        <th scope="col" className="px-4 py-2">
                            Marca
                        </th>
                        <th scope="col" className="px-4 py-2">
                            Modelo
                        </th>
                        <th scope="col" className="px-4 py-2">
                            Cetegoria
                        </th>
                        <th scope="col" className="px-4 py-2" title='Serial carroceria'>
                            Srl. carroceria
                        </th>
                        <th scope="col" className="px-4 py-2" title='Serial motor'>
                            Srl. motor
                        </th>
                        <th scope="col" className="px-4 py-2">
                            color
                        </th>
                        <th scope="col" className="px-4 py-2">
                            año
                        </th>
                        <th scope="col" className="px-4 py-2">
                            placa
                        </th>
                        <th scope="col" className="px-4 py-2">
                            operativos
                        </th>
                        <th scope="col" className="px-4 py-2">
                            observacion
                        </th>
                        <th scope="col" className="px-4 py-2">
                            descripción
                        </th>
                        <th scope="col" className="px-4 py-2">
                            fotos
                        </th>
                        <th scope="col" className="px-4 py-2">
                            acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vehicles.map(vehicle => {

                            let { brand, model, category, serialBody, serialMotor, color, year, plaque, operative, observation, description } = vehicle

                            return (

                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 uppercase text-center " key={vehicle.id}>
                                    <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-blue">
                                        1
                                    </th>
                                    <td className="px-4 py-2">
                                        {brand}
                                    </td>
                                    <td className="px-4 py-2">
                                        {model}
                                    </td>
                                    <td className="w-5">
                                        {category}
                                    </td>
                                    <td className="px-4 py-2">
                                        {serialBody}
                                    </td>
                                    <td className="px-4 py-2">
                                        {serialMotor}
                                    </td>
                                    <td className="px-4 py-2">
                                        {color}
                                    </td>
                                    <td className="px-4 py-2">
                                        {year}
                                    </td>
                                    <td className="w-5">
                                        {plaque}
                                    </td>
                                    <td className={`${operative ? "bg-[#00913f]" : "bg-[#ff0000]"} w-2`}>
                                    </td>
                                    <td className="px-4 py-2">
                                        {observation}
                                    </td>
                                    <td className="px-4 py-2">
                                        {description}
                                    </td>
                                    <td className="">
                                        <img src={Amarok} alt="" width={90} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <div className='uppercase flex justify-between text-white w-3/5 mx-auto absolute bottom-[5%] left-0 right-0'>
                <div>
                    <button
                        className='bg-blue w-36 py-2'
                    >Agregar</button>
                </div>
                <div>
                    <button
                        className='bg-blue w-36 py-2'
                    >Modificar</button>
                </div>
                <div>
                    <button
                        className='bg-blue w-36 py-2'
                    >Eliminar</button>
                </div>
            </div>
        </div>

    )
}
export default VehiclesList