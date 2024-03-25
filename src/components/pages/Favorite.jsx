import axios from "axios"
import { useEffect, useState } from "react";
import CardFav from "../common/cardFav/CardFav";
import { Link } from "react-router-dom";

const Favorite = () => {

    const [carsFav, setCarsFav] = useState([])

    const getCarFav = async () => {
        const { data } = await axios.get("http://localhost:3000/vehicles/")
        const carFav = data.filter(car => car.isFav && car)
        setCarsFav([...carFav])
    }

    useEffect(() => {
        getCarFav()
    }, [carsFav])

    return (
        <div className="text-[#010101]">
            <section
                className="w-full grid grid-cols-1 place-content-center p-4 gap-8"
            >
                {
                    carsFav.length != 0 ?
                        (
                            carsFav.map(vehicle => {
                                // if (vehicle.id) {
                                return (
                                    <CardFav key={vehicle.id} vehicle={vehicle} />
                                )
                                // }
                            })
                        )
                        :
                        (
                            <>
                                <h1>NO TIENES VEHICULOS EN FAVORITOS</h1>
                                <Link to={"/"}>
                                    Ver vehiculos
                                </Link>
                            </>
                        )
                }
            </section>
        </div>
    )
}
export default Favorite