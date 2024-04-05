import { createContext, useEffect, useState } from "react"
import { useForm } from 'react-hook-form'

export const NavBarContext = createContext()


// eslint-disable-next-line react/prop-types
const NavBarContextProvider = ({ children }) => {

    // MODAL
    const [modal1, setModal1] = useState(false)
    const [modal2, setModal2] = useState(false)

    // FIN MODAL

    const [viewNavbar, setViewNavbar] = useState(false)
    const [dataForId, setDataForId] = useState({})

    const [id, setId] = useState(0)

    const [menu, setMenu] = useState(false)


    const { reset } = useForm()

    const handleMouseEnter = () => {
        setViewNavbar(true)
    }

    const handleMouseLeave = () => {
        setViewNavbar(false)
    }

    const searchDataForId = async id => {
        try {
            const response = await fetch("http://localhost:8084/vehiculo/list/" + id)
            const data = await response.json()
            setDataForId(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        searchDataForId(id)
    }, [id])


    const data = {
        handleMouseEnter,
        handleMouseLeave,
        viewNavbar,
        setDataForId,
        dataForId,
        searchDataForId,
        reset,
        setMenu,
        menu,
        setModal2,
        setModal1,
        modal1,
        modal2,
        setId
    }

    return (
        <NavBarContext.Provider
            value={data}>
            {children}
        </NavBarContext.Provider>
    )
}
export default NavBarContextProvider
