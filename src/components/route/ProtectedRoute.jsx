import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthAdminContext } from '../../context/AuthAdminContext'

const ProtectedRoute = () => {

    const { admin } = useContext(AuthAdminContext)

    if (!admin) {
        return <Navigate to={'/'} />
    }

    return <Outlet />
}
export default ProtectedRoute
