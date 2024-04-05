import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

export const FilterContext = createContext()

const FilterContextProvider = ({ children }) => {

    const [check, setCheck] = useState([])

    const location = useLocation()

    const [vehicles, setVehicles] = useState([]);
    const [vehicleId, setVehicleId] = useState({})

    const getVehicles = async () => {

        try {
            const response = await fetch("http://localhost:8084/vehiculo/list", {
                method: 'GET'
            })
            const data = await response.json()
            setVehicles(data);
        } catch (error) {
            console.error(data);
        }

    }

    const getVehicleForId = async id => {

        try {
            const response = await fetch(`http://localhost:8084/vehiculo/list/${id}`)
            const data = await response.json()
            setVehicleId(data)
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(()=>{
        getVehicles()
    },[location])

    const data = {
        setCheck,
        check,
        vehicles,
        getVehicleForId,
        vehicleId,
    }

    return (
        <FilterContext.Provider
            value={data}
        >
            {children}
        </FilterContext.Provider>
    )
}
export default FilterContextProvider