import integrante1 from '../../../src/assets/integrantes/Andre.png'
import integrante2 from '../../../src/assets/integrantes/Mauro.png'
import integrante3 from '../../../src/assets/integrantes/Pablo.png'
import integrante4 from '../../../src/assets/integrantes/Mervin.png'
import integrante5 from '../../../src/assets/integrantes/Ivan.png'
import integrante6 from '../../../src/assets/integrantes/Kike.png'
import integrante7 from '../../../src/assets/integrantes/JuanK.png'
import integrante8 from '../../../src/assets/integrantes/Dennis.png'
import integrante9 from '../../../src/assets/integrantes/Agus.png'
import integrante10 from '../../../src/assets/integrantes/Maye.png'
import integrante11 from '../../../src/assets/integrantes/Rommy.png'

const AboutUs = () => {
    return (
        <>
            <main className="flex flex-col">
                <h1 className="px-10 text-blue text-2xl uppercase font-modern">
                    nosotros
                </h1>
                {/* <div className="flex justify-center items-center p-10"> */}
                <div className="grid grid-cols-1 p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 bg-blue p-10 rounded-lg gap-2 ">
                        <img
                            src={integrante1}
                            alt="integrante1"
                            className="w-[100%]"
                        />
                        <img
                            src={integrante2}
                            alt="integrante2"
                            className="w-[100%]"
                        />
                        <img
                            src={integrante3}
                            alt="integrante3"
                            className="w-[100%]"
                        />
                        <img
                            src={integrante4}
                            alt="integrante4"
                            className="w-[100%]"
                        />
                        <img
                            src={integrante5}
                            alt="integrante5"
                            className="w-[100%]"
                        />
                        <img
                            src={integrante6}
                            alt="integrante6"
                            className="w-[100%]"
                        />
                        <img
                            src={integrante7}
                            alt="integrante7"
                            className="w-[100%]"
                        />
                        <img
                            src={integrante8}
                            alt="integrante8"
                            className="w-[100%]"
                        />
                        <img
                            src={integrante9}
                            alt="integrante9"
                            className="w-[100%]"
                        />
                        <img
                            src={integrante10}
                            alt="integrante10"
                            className="w-[100%]"
                        />
                        <img
                            src={integrante11}
                            alt="integrante11"
                            className="w-[100%]"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutUs
