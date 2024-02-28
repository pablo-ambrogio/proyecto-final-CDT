import CardDetail from "../common/cardDetail/CardDetail"

const DetailsCar = () => {
    return (
        <main className="h-full">
            <h1
                className="font-bold text-blue text-3xl uppercase mt-10"
            >detalles</h1>
            <section
                className="w-full h-full max-w-4xl mx-auto flex items-center my-20"
            >
                <CardDetail />
            </section>
        </main>
    )
}
export default DetailsCar