import axios from "axios";
import { createContext, useState } from "react";

export const FilterContext = createContext()

const FilterContextProvider = ({ children }) => {

    const [check, setCheck] = useState([])

    const [vehicles, setVehicles] = useState([]);
    const [vehicleId, setVehicleId] = useState({})

    const getVehicles = async () => {
        const { data } = await axios.get("http://localhost:3000/vehicles")
        setVehicles(data);
    }

    const getVehicleForId = async id => {
        const { data } = await axios.get(`http://localhost:3000/vehicles/${id}`)
        setVehicleId({ ...data });
    }

    const data = {
        setCheck,
        check,
        vehicles,
        getVehicles,
        getVehicleForId,
        vehicleId
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