import axios from "axios"
import { createContext, useState } from "react"
import { useForm } from 'react-hook-form'

export const NavBarContext = createContext()


// eslint-disable-next-line react/prop-types
const NavBarContextProvider = ({ children }) => {

    const [viewNavbar, setViewNavbar] = useState(false)
    const [dataForId, setDataForId] = useState({})

    const [menu, setMenu] = useState(false)


    const { reset } = useForm()

    const handleMouseEnter = () => {
        setViewNavbar(true)
    }

    const handleMouseLeave = () => {
        setViewNavbar(false)
    }

    const searchDataForId = async id => {
        const { data } = await axios.get("http://localhost:3000/vehicles/" + id)
            .catch(({ response }) => {
                if (response.status != 200) return alert("NO SE ENCONTRO")
            })
        console.log(data);
        setDataForId(data);
    }

    const data = {
        handleMouseEnter,
        handleMouseLeave,
        viewNavbar,
        setDataForId,
        dataForId,
        searchDataForId,
        reset,
        setMenu,
        menu
    }

    return (
        <NavBarContext.Provider
            value={data}>
            {children}
        </NavBarContext.Provider>
    )
}
export default NavBarContextProvider
