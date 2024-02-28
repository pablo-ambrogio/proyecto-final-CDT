import CardDetail from "../common/cardDetail/CardDetail"

const DetailsCar = () => {
    return (
        <main className="h-screen">
            <h1
                className="font-bold text-blue text-3xl uppercase"
            >detalles</h1>
            <section
                className="w-full h-full max-w-4xl mx-auto flex items-center"
            >
                <CardDetail />
            </section>
        </main>
    )
}
export default DetailsCar