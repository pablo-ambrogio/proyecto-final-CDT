import { useState, useEffect } from "react"
import Card from "../common/card/Card"
import axios from "axios";

const Vehicles = () => {

    const [vehicles, setVehicles] = useState([]);

    const getVehicles = async () => {
        const { data } = await axios.get("http://localhost:3000/vehicles")
        setVehicles(data);
        // console.log(...data);
    }

    useEffect(() => {
        getVehicles()
    }, [])


    return (
        <div className="min-h-dvh max-w-screen-xl lg:max-w-7xl mx-auto py-8 pb-16">
            <h1 className="text-3xl uppercase">vehiculos</h1>
            <section>
                <div
                    className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-content-center p-4 gap-8"
                >
                    {
                        vehicles.map(vehicle => {
                            return (
                                <Card
                                    key={vehicle.id}
                                    vehicle={vehicle}
                                />
                            )
                        })
                    }
                    {/* <Card />  */}
                </div>
            </section>
        </div>
    )
}
export default Vehicles