import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import { FilterContext } from "./FilterContext"


export const FavoriteContext = createContext()


const FavoriteContextProvider = ({ children }) => {

    const [fav, setFav] = useState(false)
    const [id, setId] = useState()

    const { vehicleId, getVehicleForId } = useContext(FilterContext)

    const getFav = async () => {
        const { data } = await axios.get(`http://localhost:3000/vehicles/${id}`)
        setFav(data.isFav)
    }

    const putFav = async () => {
        await axios.patch(`http://localhost:3000/vehicles/${id}`, {
            isFav: fav
        })
    }

    const handleFav = () => {
        setFav(!fav)
    }

    useEffect(() => {
        getFav()
        getVehicleForId(id)
    }, [id])

    useEffect(() => {
        putFav()
    }, [fav])

    const data = {
        handleFav,
        getFav,
        fav,
        setId,
        vehicleId,
        setFav
    }


    return (
        <FavoriteContext.Provider
            value={data}>
            {children}</FavoriteContext.Provider>
    )
}
export default FavoriteContextProvider