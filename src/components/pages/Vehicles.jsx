import Card from "../common/card/Card"

const Vehicles = () => {
    return (
        <div className="min-h-dvh max-w-screen-xl lg:max-w-7xl mx-auto py-8 pb-16">
            <h1 className="text-3xl uppercase">vehiculos</h1>
            <section>
                <div
                    className="flex flex-wrap justify-center gap-8 max-w-screen-2xl mx-auto p-8"
                >
                    <Card /> {/** Card colocadas para la prueba del diseño */}
                    <Card /> {/** Card colocadas para la prueba del diseño */}
                    <Card /> {/** Card colocadas para la prueba del diseño */}
                    <Card /> {/** Card colocadas para la prueba del diseño */}
                    <Card /> {/** Card colocadas para la prueba del diseño */}
                    <Card /> {/** Card colocadas para la prueba del diseño */}
                    <Card /> {/** Card colocadas para la prueba del diseño */}
                    <Card /> {/** Card colocadas para la prueba del diseño */}
                    <Card /> {/** Card colocadas para la prueba del diseño */}
                </div>
            </section>
        </div>
    )
}
export default Vehicles