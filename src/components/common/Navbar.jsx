import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="w-1/2 flex justify-evenly uppercase">
                <Link to={'/vehiculos'}>vehículos</Link>
                <Link to={'/redAgencias'}>red de agencias</Link>
                <Link to={'/paraEmpresas'}>para empresas</Link>
                <Link to={'/dudas'}>dudas</Link>
                <Link to={'/contacto'}>Hola</Link>
            </nav>
        </>
    )
}

export default Navbar
