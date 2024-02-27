import Car from '../../assets/car-home.svg'
import Calendar from '../../assets/icon-calendar.svg'
import Clock from '../../assets/icon-clock.svg'
import Location from '../../assets/icon-location.svg'

const Home = () => {
    return (
        <section className="w-full h-screen flex justify-between">
            <div className="w-2/5 h-full flex place-content-center">
                <img src={Car} alt="Imagen de auto" className="relative z-10" />
            </div>
            <article className="w-3/5 flex items-center relative">
                <section className="bg-blue w-[800px] h-[400px] 2xl:w-[1000px] 2xl:h-[500px] flex flex-col justify-center items-center gap-8 absolute left-[-5%] z-0">
                    <div className="w-4/5 flex justify-between px-8">
                        <img src={Location} alt="icono de ubicacion" className="w-[150px] h-[150px] 2xl:w-[220px] 2xl:h-[220px]" />
                        <img src={Calendar} alt="icono de calendario" className="w-[150px] h-[150px] 2xl:w-[220px] 2xl:h-[220px]" />
                        <img src={Clock} alt="icono de reloj" className="w-[150px] h-[150px] 2xl:w-[220px] 2xl:h-[220px]" />
                    </div>
                    <form action="#" className="w-4/5 text-center">
                        <div className="flex w-full justify-around">
                            <div className="w-[150px] bg-blue text-center">
                                <select name="" id="" className="w-full bg-white py-2 text-[#000]">
                                    <option value="">Ubicación</option>
                                    <option value="argentina">Argentina</option>
                                    <option value="colombia">Colombia</option>
                                </select>
                            </div>
                            <div className="w-[150px] bg-blue text-center">
                                <input type="date" name="date-start" id="" value={'2024-02-27'} className="w-full  bg-white py-2 text-[#000]" />
                            </div>
                            <div className="w-[150px] bg-blue">
                                <input type="time" name="time-start" min={'1:00'} max={'12:00'} value={'21:00'} className="w-full bg-white py-2 text-[#000]" />
                            </div>
                        </div>
                        <button type="submit" className="bg-red font-bold w-48 py-2 mt-8 rounded">
                            Buscar
                        </button>
                    </form>
                </section>
            </article>
        </section>
    )
}
export default Home
