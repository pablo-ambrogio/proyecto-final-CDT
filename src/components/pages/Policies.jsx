const Policies = () => {
    return (
        <>
            <main className="flex flex-col bg-white">
                <div className="">
                    <h2 className="px-10 pt-10 text-blue text-2xl uppercase font-modern">
                        Política de producto
                    </h2>
                    <p className="px-10 text-blue text-md ">
                        En nuestra empresa, la seguridad es nuestra prioridad.
                        Queremos asegurarnos de que nuestros clientes viajen de
                        manera segura y confiable. Por eso, hemos establecido
                        las siguientes reglas y directrices:
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-5 h-96 p-10">
                    {/* BLOQUE IZQUIERDA */}
                    <div className="grid bg-blue2 text-white p-10 rounded-lg gap-2 shadow-lg">
                        <ul className="font-bold">
                            Uso Responsable de los Vehículos:
                            <li className="ml-5 list-disc font-normal">
                                Cumple con los límites de velocidad y respeta
                                las señales de tráfico.
                            </li>
                        </ul>
                        <ul className="font-bold">
                            Mantenimiento y Cuidado:
                            <li className="ml-5 list-disc font-normal">
                                Realizamos mantenimientos regulares para
                                garantizar que nuestros vehículos estén en
                                óptimas condiciones.
                            </li>
                        </ul>
                        <ul className="font-bold">
                            Seguridad al Conducir:
                            <li className="ml-5 list-disc font-normal">
                                Siempre utiliza el cinturón de seguridad.
                            </li>
                            <li className="ml-5 list-disc font-normal">
                                No uses el teléfono móvil mientras conduces.
                            </li>
                            <li className="ml-5 list-disc font-normal">
                                Mantén una distancia segura con otros vehículos.
                            </li>
                        </ul>
                    </div>

                    {/* BLOQUE CENTRO */}
                    <div className="grid bg-grey text-blue p-10 rounded-lg gap-2 ">
                        <ul className="font-bold">
                            Reporte de Incidentes:
                            <li className="ml-5 list-disc font-normal">
                                Si tienes un accidente o encuentras algún daño
                                en el vehículo, infórmanos de inmediato.
                            </li>
                            <li className="ml-5 list-disc font-normal">
                                Estamos aquí para ayudarte en caso de
                                emergencia.
                            </li>
                        </ul>
                        <ul className="font-bold">
                            Sanciones:
                            <li className="ml-5 list-disc font-normal">
                                Si el cliente no devuelve el vehículo en la
                                fecha y hora acordadas, se aplicará una sanción
                                económica.
                            </li>
                            <li className="ml-5 list-disc font-normal">
                                Si el cliente causa daños al vehículo debido a
                                negligencia (como conducir bajo la influencia,
                                no seguir las normas de tránsito o no cuidar
                                adecuadamente el vehículo), se aplicará una
                                sanción económica.
                            </li>
                        </ul>
                    </div>

                    {/* BLOQUE DERECHA */}
                    <div className="grid bg-white text-blue p-10 rounded-lg gap-2  border border-grey">
                        <ul className="font-bold">
                            Cobertura básica que ampara el vehículo:
                            <li className="ml-5 list-disc font-normal">
                                Este es un valor fijo que cubre los riesgos por
                                responsabilidad civil extracontractual, es
                                decir, daños a terceros.
                            </li>
                        </ul>
                        <ul className="font-bold">
                            Política de Combustible:
                            <li className="ml-5 list-disc font-normal">
                                Siempre entregamos los vehículos con el tanque
                                lleno de combustible.
                            </li>
                            <li className="ml-5 list-disc font-normal">
                                Al devolver el vehículo, se espera que el
                                cliente lo entregue con la misma cantidad de
                                combustible.
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="pt-24 ml-10 pb-10">
                    ¡Gracias por confiar en nosotros! Juntos, hagamos de cada
                    viaje una experiencia segura y agradable.
                </p>
            </main>
        </>
    )
}

export default Policies
