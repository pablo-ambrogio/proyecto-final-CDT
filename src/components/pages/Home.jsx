import Car from '../../assets/car-home.svg'
import Calendar from '../../assets/icon-calendar.svg'
import Clock from '../../assets/icon-clock.svg'
import Location from '../../assets/icon-location.svg'

const Home = () => {
    return (
        <section
            className='w-full h-screen flex justify-between'
        >
            <div className='w-2/5 h-full flex place-content-center'>
                <img src={Car} alt="Imagen de auto"
                    className='relative z-10'
                />
            </div>
            <article
                className='w-3/5 flex items-center relative'
            >
                <section
                    className='bg-secondary w-[48rem] h-[400px] 2xl:w-[1000px] 2xl:h-[500px] flex flex-col justify-center items-center gap-8 absolute left-[-10%] top-[12%] z-0'
                >
                    <div
                        className='w-4/5 flex justify-between px-8'
                    >
                        <img src={Location} alt="icono de ubicacion"
                            className='w-[150px] h-[150px] 2xl:w-[220px] 2xl:h-[220px]'
                        />
                        <img src={Calendar} alt="icono de calendario"
                            className='w-[150px] h-[150px] 2xl:w-[220px] 2xl:h-[220px]'
                        />
                        <img src={Clock} alt="icono de reloj"
                            className='w-[150px] h-[150px] 2xl:w-[220px] 2xl:h-[220px]'
                        />
                    </div>
                    <form action="#"
                        className='w-4/5 text-center'
                    >
                        <div
                            className='flex w-full justify-around'
                        >
                            <div className='w-[150px] text-center'>
                                <select name="" id=""
                                    className='w-full bg-grey py-2 text-[#000] rounded-lg'
                                >
                                    <option value="">Ubicación</option>
                                    <option value="argentina">Argentina</option>
                                    <option value="colombia">Colombia</option>
                                </select>
                            </div>
                            <div className='w-[150px] text-center'>
                                <input type="date" name="date-start" id=""
                                    className='w-full bg-grey py-2 text-[#000] rounded-lg'
                                />
                            </div>
                            <div className='w-[150px]'>
                                <input type="time" name='time-start'
                                    className='w-full bg-grey py-2 text-[#000] rounded-lg'
                                />
                            </div>
                        </div>
                        <button type="submit"
                            className='bg-primary font-bold w-48 py-2 mt-8 rounded-lg'
                        >Buscar</button>
                                                <button type="submit"
                            className='bg-primary font-bold w-48 py-2 mt-8 rounded-lg'
                        >Cargar Vehículo</button>
                    </form>
                </section>
            </article>
        </section>
    )
}

export default Home
