import { useState, useEffect } from 'react'
import CarMobi from '../../../assets/car-mobi.svg'
import Policies from '../../pages/Policies'
import Modal from '../modal/Modal'
import ButtonFav from '../buttonFav/ButtonFav'
import axios from 'axios'


const CardDetail = ({ id }) => {

    const [vehicleId, setVehicleId] = useState({})
    const [modal, setModal] = useState(false)
    const [isData, setIsData] = useState(false)

    const getVehicleForId = async id => {
        const { data } = await axios.get(`http://localhost:3000/vehicles/${id}`)
        setVehicleId({ ...data });
        setIsData(true)
    }

    useEffect(() => {
        getVehicleForId(id)
    }, [isData])

    return (
        <div>
            <article className="p-8 text-secondary sm:h-auto rounded-lg max-w-7xl mx-auto">

                <section className="grid grid-cols-2 grid-rows-[1fr,100px] h-full gap-x-4 md:gap-6">
                    <div className="lg:col-start-1 lg:col-end-2 row-span-1 self-center justify-self-center">
                        <div
                            className='bg-secondary relative w-96 h-96 rounded-full'>
                            <img
                                src={CarMobi}
                                alt="Auto fiat mobi"
                                className="w-96 h-full mx-auto lg:w-full absolute"
                            />
                        </div>
                    </div>
                    <div className="lg:col-start-2 lg:col-end-3 lg:row-start-1 row-span-1 flex flex-col gap-y-8">
                        <div className="flex justify-between items-center pr-2">
                            <div>
                                <h1
                                    className='text-4xl font-bold uppercase'
                                >{vehicleId.brand}</h1>
                                <p
                                    className='uppercase text-2xl'
                                >{vehicleId.category}</p>
                            </div>
                            {
                                isData &&
                                <ButtonFav id={id} isFav={vehicleId.isFav} />
                            }

                        </div>
                        <p className="tracking-wider">
                            El Fiat Mobi 1.0 es un compacto producido en Brasil,
                            equipado con un motor Fire de 1.0 litro que
                            desarrolla 68 caballos de potencia. Destaca por su
                            diseño robusto, su interior con pantalla de siete
                            pulgadas y un baúl de 235 litros. Su transmisión es
                            manual de cinco velocidades.
                        </p>
                    </div>

                    <div className="flex-col gap-3 lg:col-start-2 lg:col-end-3 row-span-2 flex justify-start items-center">
                        <div
                            className="hover:font-bold hover:underline"
                            onClick={() => {
                                setModal(!modal)
                            }}
                        >
                            Política de producto
                        </div>
                        <Modal state={modal} setState={setModal}>
                            <div className="flex flex-col items-center">
                                <Policies />
                            </div>
                        </Modal>

                        <button className="first-letter:uppercase w-[15rem] bg-secondary p-2 text-white rounded-lg">
                            resevar ahora
                        </button>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default CardDetail
