// import axios from 'axios'
// import { useState, useEffect } from 'react'

const NavSearch = () => {

    /*
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    const peticionGet = async () => {
        await axios
            .get('http://localhost:3000/vehicles')
            .then(res => {
                // console.log(res.data)
                setUsers(res.data)
                setTablaUsuarios(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleChange = e => {
        setSearch(e.target.value)
        console.log('Busqueda: ' + e.target.value)
    }

    const filtrar = terminoBusqueda => {
        let resultadosBusqueda = tablaUsuarios.filter(elemento => {
            if (
                elemento.name
                    .toString()
                    .toLowerCase()
                    .includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento
            }
        })
    }

    useEffect(() => {
        peticionGet()
    }, [])
    */

    return (
        <>
            <section className="flex flex-col lg:flex-row justify-center w-full p-4 gap-4 items-center text-white">
                <div className="flex lg:flex-1 flex-col w-full lg:w-fit">
                    <p className=' mb-2'>Ubicación para retirar el vehículo</p>
                    <input
                        className="rounded px-4 h-10 bg-grey text-secondary outline-none "
                        type="text"
                        placeholder="Punto de retirada (Ej: Buenos Aires, Bogotá)"
                    // value={search}
                    // onChange={handleChange}
                    />
                </div>
                <div className=" w-full lg:w-fit">
                    <p className='mb-2'>Fecha de retiro</p>
                    <input
                        className="rounded px-4 h-10 bg-grey text-secondary outline-none w-full"
                        type="date"
                    />
                </div>
                <div className="w-full lg:w-fit">
                    <p className=' mb-2'>Fecha de devoulción</p>
                    <input
                        className="rounded px-4 h-10 bg-grey text-secondary outline-none w-full"
                        type="date"
                    />
                </div>
                <div className='lg:self-end w-full lg:w-fit mt-2 lg:m-0'>
                    <button className=" w-full
                h-10 px-8 rounded-lg text-white border-0 bg-secondary cursor-pointer font-bold 
                hover:bg-grey hover:text-secondary 
                transition-in-out duration-300">
                        Buscar
                    </button>
                </div>
            </section>
        </>
    )
}

export default NavSearch
