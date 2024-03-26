import { useState, useEffect, useContext } from "react"
import Card from "../common/card/Card"
import { FilterContext } from "../../context/FilterContext"
// import { FilterContext } from "../../context/FilterContext";

const Vehicles = () => {

    const { vehicles, check, getVehicles } = useContext(FilterContext)
    // const [vehicles, setVehicles] = useState([]);


    // const getVehicles = async () => {
    //     const { data } = await axios.get("http://localhost:3000/vehicles")
    //     setVehicles(data);
    // }

    useEffect(() => {
        getVehicles()
    }, [])

    useEffect(() => {
        console.log(check);
    }, [check])

    return (
        <div className="min-h-dvh max-w-screen-xl lg:max-w-7xl mx-auto py-8 pb-16">
            <section>
                <div
                    className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-content-center p-4 gap-8"
                >
                    {
                        check.length != 0 ? (
                            check.map(vehicle => {
                                return (
                                    <Card
                                        key={vehicle.id}
                                        vehicle={vehicle}
                                    />
                                )
                            })
                        ) : (
                            vehicles.map(vehicle => {
                                return (
                                    <Card
                                        key={vehicle.id}
                                        vehicle={vehicle}
                                    />
                                )
                            })
                        )
                    }
                </div>
            </section>
        </div>
    )
}
export default Vehicles
