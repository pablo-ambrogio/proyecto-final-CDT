import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    let admin = false

    if (!admin) {
        return <Navigate to={'/'} />
    }

    return <Outlet />
}
export default ProtectedRoute
