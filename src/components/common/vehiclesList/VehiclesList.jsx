import Amarok from '../../../assets/amarok.webp'

const VehiclesList = () => {
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
                            Tipo
                        </th>
                        <th scope="col" className="px-4 py-2">
                            Serial carroceria
                        </th>
                        <th scope="col" className="px-4 py-2">
                            Serial motor
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
                            fotos
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 uppercase text-center ">
                        <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-blue">
                            1
                        </th>
                        <td className="px-4 py-2">
                            Volkswagen
                        </td>
                        <td className="px-4 py-2">
                            Amarok
                        </td>
                        <td className="w-5">
                            auto
                        </td>
                        <td className="px-4 py-2">
                            65465A654654D564
                        </td>
                        <td className="px-4 py-2">
                            ASDFF65454FF545F
                        </td>
                        <td className="px-4 py-2">
                            Negro
                        </td>
                        <td className="px-4 py-2">
                            2024
                        </td>
                        <td className="w-5">
                            AG 777 ZZ
                        </td>
                        <td className="w-3 bg-[#00913f]">
                        </td>
                        <td className="px-4 py-2">
                            r-09
                        </td>
                        <td className="">
                            <img src={Amarok} alt="" width={90} />
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 uppercase text-center">
                        <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-blue">
                            1
                        </th>
                        <td className="px-4 py-2">
                            Volkswagen
                        </td>
                        <td className="px-4 py-2">
                            Amarok
                        </td>
                        <td className="w-5">
                            Pick-up
                        </td>
                        <td className="px-4 py-2">
                            65465A654654D564
                        </td>
                        <td className="px-4 py-2">
                            ASDFF65454FF545F
                        </td>
                        <td className="px-4 py-2">
                            Negro
                        </td>
                        <td className="px-4 py-2">
                            2024
                        </td>
                        <td className="w-5">
                            AG 777 ZZ
                        </td>
                        <td className="w-3 bg-[#00913f]">
                        </td>
                        <td className="px-4 py-2">
                            r-09
                        </td>
                        <td className="">
                            <img src={Amarok} alt="" width={90} />
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 uppercase text-center">
                        <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-blue">
                            1
                        </th>
                        <td className="px-4 py-2">
                            Volkswagen
                        </td>
                        <td className="px-4 py-2">
                            Amarok
                        </td>
                        <td className="w-5">
                            Pick-up
                        </td>
                        <td className="px-4 py-2">
                            65465A654654D564
                        </td>
                        <td className="px-4 py-2">
                            ASDFF65454FF545F
                        </td>
                        <td className="px-4 py-2">
                            Negro
                        </td>
                        <td className="px-4 py-2">
                            2024
                        </td>
                        <td className="w-5">
                            AG 777 ZZ
                        </td>
                        <td className="w-3 bg-[#00913f]">
                        </td>
                        <td className="px-4 py-2">
                            r-09
                        </td>
                        <td className="">
                            <img src={Amarok} alt="" width={90} />
                        </td>
                    </tr>
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