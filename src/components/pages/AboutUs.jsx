import integrante1 from '../../../src/assets/integrantes/Agus.png'
import integrante2 from '../../../src/assets/integrantes/Andre.png'
import integrante3 from '../../../src/assets/integrantes/Dennis.png'
import integrante4 from '../../../src/assets/integrantes/Ivan.png'
import integrante5 from '../../../src/assets/integrantes/JuanK.png'
import integrante6 from '../../../src/assets/integrantes/Kike.png'
import integrante7 from '../../../src/assets/integrantes/Mauro.png'
import integrante8 from '../../../src/assets/integrantes/Agus.png'
import integrante9 from '../../../src/assets/integrantes/Maye.png'
import integrante10 from '../../../src/assets/integrantes/Mervin.png'
import integrante11 from '../../../src/assets/integrantes/Pablo.png'
import car from '../../../src/assets/Car3 1.svg'

const AboutUs = () => {
    return (
        <>
            <main className="h-full">
                <h1 className="ml-10 text-blue text-2xl uppercase font-modern p-2">sobre nosotros</h1>
                <div className="grid place-items-center grid-cols-3 gap-4 items-end my-10">
                    <section className="bg-grey rounded-lg col-span-2">
                        <div className="grid grid-cols-6 gap-4 p-2 w-5/6">
                            <img src={integrante1} alt="integrante1" />
                            <img src={integrante2} alt="integrante2" />
                            <img src={integrante3} alt="integrante3" />
                            <img src={integrante4} alt="integrante4" />
                            <img src={integrante5} alt="integrante5" />
                            <img src={integrante6} alt="integrante6" />
                            <img src={integrante7} alt="integrante7" />
                            <img src={integrante8} alt="integrante8" />
                            <img src={integrante9} alt="integrante9" />
                            <img src={integrante10} alt="integrante10" />
                            <img src={integrante11} alt="integrante11" />
                        </div>
                        <div className="text-blue p-2 text-sm">
                            <p>
                                <span className="font-modern">Scrum Master:</span> Andrea de Oña
                            </p>
                            <p>
                                <span className="font-modern">Frontend: </span> Mauricio Henao, Pablo Ambrogio
                            </p>
                            <p>
                                <span className="font-modern">Backend:</span> Juan Carlos Álvarez, Agustin Rios, Dennis Juilland
                            </p>
                            <p>
                                <span className="font-modern">Base de Datos:</span> Mayerline Bueno, Romina Mastropierro
                            </p>
                            <p>
                                <span className="font-modern">Infraestructura:</span> Mervin Sosa
                            </p>
                            <p>
                                <span className="font-modern">Testing:</span> Ivan Gómez
                            </p>
                            <p>
                                <span className="font-modern">UX/UI:</span> Enrique González
                            </p>
                        </div>
                    </section>
                    <img className="mr-[-32%]" src={car} alt="Car" />
                </div>
            </main>
        </>
    )
}

export default AboutUs
