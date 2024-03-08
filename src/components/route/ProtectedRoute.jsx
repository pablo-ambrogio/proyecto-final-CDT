import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {

    let admin = true

    if (!admin) {
        return <Navigate to={'/'} />
    }

    return (
        <Outlet />
    )
}
export default ProtectedRoute