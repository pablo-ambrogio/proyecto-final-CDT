import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginAdmin from './components/pages/admin/LoginAdmin.jsx'
=======
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
>>>>>>> pablo
import Vehicles from './components/pages/Vehicles.jsx'
import AdminHome from './components/pages/admin/AdminHome.jsx'
import AdminVehiclesList from './components/pages/admin/AdminVehiclesList.jsx'
import DetailsCar from './components/pages/DetailsCar.jsx'
<<<<<<< HEAD
import Login from './components/pages/Login.jsx'
=======
import ProtectedRoute from './components/route/ProtectedRoute.jsx'
>>>>>>> pablo

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />}>

          <Route path='/' element={<Vehicles />} />

          <Route path='/login' element={<Login />} />
          <Route path='vehicles/:id' element={<DetailsCar />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/admin' element={<AdminHome />} />
            <Route path='/vehicles-list' element={<AdminVehiclesList />} />
          </Route>

        </Route>

        <Route path='*' element={<Navigate to={"/"} />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
