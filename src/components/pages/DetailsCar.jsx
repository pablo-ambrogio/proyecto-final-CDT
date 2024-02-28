import CardDetail from "../common/cardDetail/CardDetail"
import ExploreVehicles from "../common/exploreVehicles/ExploreVehicles"

const DetailsCar = () => {
    return (
        <main className="h-full">
            <h1
                className="font-bold text-blue text-3xl uppercase"
            >detalles</h1>
            <section
                className="w-full"
            >
                <CardDetail />
                <ExploreVehicles />
            </section>
        </main>
    )
}
export default DetailsCar