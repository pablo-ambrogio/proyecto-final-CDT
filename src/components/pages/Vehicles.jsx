import { useEffect, useContext } from "react"
import Card from "../common/card/Card"
import { FilterContext } from "../../context/FilterContext"

const Vehicles = () => {
    const { vehicles, check, getVehicles } = useContext(FilterContext)

    useEffect(() => {
        getVehicles()
    }, [])

    return (
        <div className="min-h-dvh max-w-screen-xl lg:max-w-7xl mx-auto py-8 pb-16">
            <section className="flex flex-wrap justify-center gap-8 p-4 card-container">
                {check.length !== 0 ? (
                    check.map(vehicle => (
                        <Card key={vehicle.id} vehicle={vehicle} className="w-80" />

                    ))
                ) : (
                    vehicles.map(vehicle => (
                        <Card key={vehicle.id} vehicle={vehicle} className="w-80" />

                    ))
                )}
            </section>
        </div>
    )
}

export default Vehicles
