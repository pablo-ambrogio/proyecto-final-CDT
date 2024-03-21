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
            <section className="flex bg-blue2 bg-gradient-to-t from-degrade w-full px-16 py-2 gap-3">
                <div className="flex flex-1 flex-col">
                    <p>Ubicación para retirar el vehículo</p>
                    <input
                        className="rounded py-1 px-5 bg-grey text-blue outline-none "
                        type="text"
                        placeholder="Punto de retirada (Ej: Buenos Aires, Bogotá)"
                        value={search}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <p>Fecha inicio</p>
                    <input
                        className="rounded py-1 px-5 bg-grey text-blue outline-none"
                        type="date"
                    />
                </div>
                <div className="">
                    <p>Fecha fin</p>
                    <input
                        className="rounded py-1 px-5 bg-grey text-blue outline-none"
                        type="date"
                    />
                </div>
                <button className="block py-2 px-4 leading-none rounded-lg text-sm text-white border-0 bg-blue hover:bg-grey hover:text-blue cursor-pointer font-bold capitalize transition-in-out duration-700">
                    Buscar
                </button>
            </section>
        </>
    )
}

export default NavSearch
