import { useContext, useEffect, useState } from "react"
import IconFav from '../../../assets/icon-fav.svg'
import IconFavRed from '../../../assets/icon-fav-red.svg'
import axios from "axios"
import { FilterContext } from "../../../context/FilterContext"
import { useLocation } from "react-router-dom"
// import  from 'react-router-dom'


const ButtonFav = ({ id, isFav }) => {

    const location = useLocation()

    const [fav, setFav] = useState(isFav)
    const { getVehicles, } = useContext(FilterContext)

    const putFav = (id) => {
        axios.patch(`http://localhost:3000/vehicles/${id}`, {
            isFav: fav
        })
    }

    const handleFav = () => {
        setFav(!fav)
    }

    useEffect(() => {
        putFav(id)
        getVehicles()
    }, [fav])

    return (
        <button
            onClick={handleFav}
        >
            <img
                src={`${!fav ? IconFav : IconFavRed}`}
                className={`${location.pathname.includes("vehicles") ? "bg-transparent" : "bg-grey"} `}
                alt="icono de corazon, sirve para marcar como favorito" />
        </button>
    )
}
export default ButtonFav