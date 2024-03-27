import { createContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

export const AuthAdminContext = createContext()


const AuthAdminContextProvider = ({ children }) => {

    const location = useLocation()


    const [admin, setAdmin] = useState(true)

    console.log(location);

    const data = {
        setAdmin,
        admin
    }

    useEffect(() => {
        if (!location.pathname.includes("admin")) {
            setAdmin(false)
        }
    }, [location])

    return (
        <AuthAdminContext.Provider
            value={data}
        >
            {children}
        </AuthAdminContext.Provider>
    )
}
export default AuthAdminContextProvider