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
                            <div
                                className="text-center uppercase flex flex-col gap-8"
                            >
                                <h1 className="text-xl">Lo siento, no tienes vehículos en favoritos</h1>
                                <p
                                    className="mx-auto w-2/5"
                                >si quieres agregar vehíclos a favoritos haz click en el siguiente enlace
                                    <span
                                        className="inline-block ml-1"
                                    >
                                        <Link to={"/"}
                                            className="text-secondary underline"
                                        >
                                            Ver vehiculos
                                        </Link>
                                    </span>
                                </p>
                            </div>
                        )
                }
            </section>
        </div>
    )
}
export default Favorite