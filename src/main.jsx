import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Vehicles from './components/pages/Vehicles.jsx'
import AdminHome from './components/pages/admin/AdminHome.jsx'
import AdminVehiclesList from './components/pages/admin/AdminVehiclesList.jsx'
import DetailsCar from './components/pages/DetailsCar.jsx'
import AboutUs from './components/pages/AboutUs.jsx'
import ProtectedRoute from './components/route/ProtectedRoute.jsx'
import Register from './components/pages/Register.jsx'
import ModalLogin from './components/pages/ModalLogin.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Vehicles />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/login" element={<ModalLogin />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/vehicles/:id" element={<DetailsCar />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/admin-home" element={<AdminHome />} />
                        <Route
                            path="/vehicles-list"
                            element={<AdminVehiclesList />}
                        />
                    </Route>
                </Route>

                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
