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
        <div className=" overflow-x-auto h-screen text-blue max-w-7xl mx-auto p-4">
            <h1 className="text-xl font-semibold uppercase">Lista de vehiculos</h1>
            <table className="w-fit text-xs mt-8 border border-blue">
                <thead className="uppercase text-center border border-blue">
                    <tr>
                        <th >
                            Marca
                        </th>
                        <th className="bg-red" scope='col'>
                            Modelo
                        </th>
                        <th className='bg-blue'>
                            Categoria
                        </th>
                        <th title='Serial carroceria' className="bg-red">
                            Srl. carroceria
                        </th>
                        <th title='Serial motor' className='bg-blue'>
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

                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 uppercase text-center " key={vehicle.id}>
                                    <td className="">
                                        {brand}
                                    </td>
                                    <td className="">
                                        {model}
                                    </td>
                                    <td className="w-5">
                                        {category}
                                    </td>
                                    <td className="">
                                        {serialBody}
                                    </td>
                                    <td className="">
                                        {serialMotor}
                                    </td>
                                    <td className="">
                                        {color}
                                    </td>
                                    <td className="">
                                        {year}
                                    </td>
                                    <td className="w-5">
                                        {plaque}
                                    </td>
                                    <td className={`${operative ? "bg-[#00913f]" : "bg-[#ff0000]"} w-2`}>
                                    </td>
                                    <td className="">
                                        {observation}
                                    </td>
                                    <td className="">
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
            
        </div>

    )
}
export default VehiclesList