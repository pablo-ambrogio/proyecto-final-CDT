import CardDetail from "../common/cardDetail/CardDetail"
import ExploreVehicles from "../common/exploreVehicles/ExploreVehicles"
import ArrowBack from '../../assets/arrow-back.svg'
import { Link, useParams } from "react-router-dom"

const DetailsCar = () => {

    const { id } = useParams()

    return (
        <section className="h-full max-w-7xl">
            <section
                className="mx-auto lg:w-full"
            >
                <div className="w-11/12 lg:w-full px-4 py-8 mx-auto md:mx-0">
                    <Link to={"/"}>
                        <img src={ArrowBack} alt="" />
                    </Link>
                </div>
                <section className="w-11/12 lg:w-4/5 mx-auto">
                    <div className="w-full">
                        <CardDetail id={id} />
                    </div>
                </section>
                <ExploreVehicles />
            </section>
        </section>
    )
}
export default DetailsCar