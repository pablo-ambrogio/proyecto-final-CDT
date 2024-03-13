import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Vehicles from './components/pages/Vehicles.jsx'
import AdminHome from './components/pages/admin/AdminHome.jsx'
import AdminVehiclesList from './components/pages/admin/AdminVehiclesList.jsx'
import DetailsCar from './components/pages/DetailsCar.jsx'
import ProtectedRoute from './components/route/ProtectedRoute.jsx'
import Login from './components/pages/Login.jsx'
import AdminCategories from './components/pages/admin/AdminCategories.jsx'
import AdminCharacteristics from './components/pages/admin/AdminCharacteristics.jsx'
import AdminAddUser from './components/pages/admin/AdminAddUser.jsx'
import AdminConfiguration from './components/pages/admin/AdminConfiguration.jsx'
import AdminReserve from './components/pages/admin/AdminReserve.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />}>

          <Route path='/' element={<Vehicles />} />
          <Route path='vehicles/:id' element={<DetailsCar />} />
          <Route path='login' element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/admin' element={<AdminHome />}>

              <Route path='vehicles-list' element={<AdminVehiclesList />} />
              <Route path='categories' element={<AdminCategories />} />
              <Route path='characteristics' element={<AdminCharacteristics />} />


              <Route path='reserve' element={<AdminReserve />} />
              <Route path='add-users' element={<AdminAddUser />} />
              <Route path='configuration' element={<AdminConfiguration />} />

            </Route>
          </Route>

          <Route path='*' element={<Navigate to={"/"} />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
