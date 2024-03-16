import CardDetail from "../common/cardDetail/CardDetail"
import ExploreVehicles from "../common/exploreVehicles/ExploreVehicles"
import ArrowBack from '../../assets/arrow-back.svg'
import { Link } from "react-router-dom"

const DetailsCar = () => {
    return (
        <section className="h-full">
            <h1
                className="font-bold text-blue text-4xl uppercase mt-10 w-4/5 mx-auto max-w-screen-xl"
            >detalles</h1>
            <section
                className="w-full"
            >
                <section
                    className="w-4/5 2xl:w-8/12 mx-auto my-10 
                    grid 
                    lg:grid-cols-[2rem,1fr] lg:grid-rows-1 lg:gap-0
                    sm:grid-cols-[1fr] sm:grid-rows-[2rem,1fr] gap-8"
                >
                    <div
                        className="
                        grid 
                        lg:place-self-center 
                        lg:col-span-1 
                        sm:col-span-1 sm:row-span-1 sm:place-self-start"
                    >
                        <Link to={"/"}>
                            <img src={ArrowBack} alt="" />
                        </Link>
                    </div>
                    <div
                        className="md:w-4/5 sm:w-full 
                        grid 
                        place-self-center 
                        lg:col-span-1 
                        sm:col-span-1 sm:row-span-1"
                    >
                        <CardDetail />
                    </div>
                </section>
                <ExploreVehicles />
            </section>
        </section>
    )
}
export default DetailsCar