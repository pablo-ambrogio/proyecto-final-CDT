import CarMobi from '../../../assets/car-mobi.svg'

const CardDetail = () => {
    return (
        <div>
            <article
                className='bg-grey p-8 text-blue h-[28rem] rounded-lg max-w-4xl mx-auto'
            >
                <section>
                    <h1
                        className='text-2xl font-bold'
                    >Fiat mobi 1.0</h1>
                    <p
                        className='uppercase text-sm'
                    >GRUPO C - ECONÓMICO CON AIRE MECÁNICO</p>
                </section>
                <section
                    className='grid grid-cols-2 grid-rows-4 h-4/5 gap-x-4 mt-4'
                >
                    <div
                        className='col-span-1 row-start-1 row-end-4'
                    >
                        <img src={CarMobi} alt="Auto fiat mobi"
                            className='w-full h-full'
                        />
                    </div>
                    <div
                        className='col-span-1 row-start-1 row-span-3 flex items-center'
                    >
                        <p className='tracking-wider'>
                            El Fiat Mobi 1.0 es un compacto producido en Brasil, equipado con un motor Fire de 1.0 litro que desarrolla 68 caballos de potencia. Destaca por su diseño robusto, su interior con pantalla de siete pulgadas y un baúl de 235 litros. Su transmisión es manual de cinco velocidades.
                        </p>

                    </div>
                    <div
                        className='col-star-2 col-end-3 row-start-4 row-span-1 flex justify-center items-center'
                    >
                        <button
                            className='first-letter:uppercase w-[15rem] bg-blue p-2 text-white rounded-lg'
                        >resevar ahora</button>
                    </div>
                </section>
            </article>
        </div>

    )
}
export default CardDetail