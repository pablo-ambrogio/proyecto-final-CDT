import { createContext, useState } from "react"

export const NavBarContext = createContext()


// eslint-disable-next-line react/prop-types
const NavBarContextProvider = ({ children }) => {

    const [viewNavbar, setViewNavbar] = useState(false)

    const handleMouseEnter = () => {
        setViewNavbar(true)
    }

    const handleMouseLeave = () => {
        setViewNavbar(false)
    }

    const data = {
        handleMouseEnter,
        handleMouseLeave,
        viewNavbar,
    }

    return (
        <NavBarContext.Provider
            value={data}>
            {children}
        </NavBarContext.Provider>
    )
}
export default NavBarContextProvider
