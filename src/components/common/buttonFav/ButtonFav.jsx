import { useContext, useEffect } from "react"
import { FavoriteContext } from "../../../context/FavoriteContext"
import IconFav from '../../../assets/icon-fav.svg'
import IconFavRed from '../../../assets/icon-fav-red.svg'

const ButtonFav = ({ id }) => {

    const { handleFav, fav, setId } = useContext(FavoriteContext)

    useEffect(() => {
        setId(id)
    }, [id])

    return (
        <button
            onClick={handleFav}
        >
            <img src={`
${!fav ? IconFav : IconFavRed}`
            } alt="icono de corazon, sirve para marcar como favorito" />
        </button>
    )
}
export default ButtonFav