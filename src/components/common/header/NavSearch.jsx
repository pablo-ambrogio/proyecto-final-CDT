import axios from 'axios'
import { useState, useEffect } from 'react'

const NavSearch = () => {
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

    return (
        <>
            <section className="flex w-full px-4 py-2 gap-3 max-w-7xl mx-auto items-center">
                <div className="flex flex-1 flex-col text-sm">
                    <p className=' mb-2'>Ubicación para retirar el vehículo</p>
                    <input
                        className="rounded px-4 h-10 bg-grey text-secondary outline-none "
                        type="text"
                        placeholder="Punto de retirada (Ej: Buenos Aires, Bogotá)"
                        value={search}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-2 text-sm">
                    <p className=' mb-2'>Fecha de retiro</p>
                    <input
                        className="rounded px-4 h-10 bg-grey text-secondary outline-none"
                        type="date"
                    />
                </div>
                <div className="flex-2 text-sm">
                    <p className=' mb-2'>Fecha de devoulción</p>
                    <input
                        className="rounded px-4 h-10 bg-grey text-secondary outline-none"
                        type="date"
                    />
                </div>
                <div
                    className='self-end'
                >
                    <button className="
                block h-10 px-8 rounded-lg text-sm text-white border-0 bg-secondary cursor-pointer font-bold 
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
