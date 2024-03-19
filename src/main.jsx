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
import Login from './components/pages/Login.jsx'
import AdminCategories from './components/pages/admin/AdminCategories.jsx'
import AdminCharacteristics from './components/pages/admin/AdminCharacteristics.jsx'
import AdminAddUser from './components/pages/admin/AdminAddUser.jsx'
import AdminConfiguration from './components/pages/admin/AdminConfiguration.jsx'
import AdminReserve from './components/pages/admin/AdminReserve.jsx'
import AdminAddVehicles from './components/pages/admin/AdminAddVehicles.jsx'
import NavBarContextProvider from './context/NavbarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD

      <NavBarContextProvider>
        <Routes>

          <Route path='/' element={<App />}>
=======
      <Routes>
        <Route path='/' element={<App />}>

          <Route path='/' element={<Vehicles />} />
          {/* <Route path='login' element={<Login />} /> */}
          {/* <Route path="register" element={<Register />} /> */}
          <Route path="about-us" element={<AboutUs />} />
          <Route path='vehicles/:id' element={<DetailsCar />} />
>>>>>>> b32fe732a5c7aa1fbbb3ab7c657fdc75d1c4c2db

            <Route path='/' element={<Vehicles />} />
            <Route path='vehicles/:id' element={<DetailsCar />} />
            <Route path='login' element={<Login />} />

<<<<<<< HEAD

            <Route element={<ProtectedRoute />}>

              <Route path='/admin' element={<AdminHome />}>

                <Route path='add-vehicle' element={<AdminAddVehicles />} />
                <Route path='add-vehicle/:id' element={<AdminAddVehicles />} />
                <Route path='vehicles-list' element={<AdminVehiclesList />} />
                <Route path='categories' element={<AdminCategories />} />
                <Route path='characteristics' element={<AdminCharacteristics />} />

                <Route path='reserve' element={<AdminReserve />} />
                <Route path='add-users' element={<AdminAddUser />} />
                <Route path='configuration' element={<AdminConfiguration />} />
              </Route>
=======
              <Route path='reserve' element={<AdminReserve />} />
              <Route path='add-users' element={<AdminAddUser />} />
              <Route path='configuration' element={<AdminConfiguration />} />
>>>>>>> b32fe732a5c7aa1fbbb3ab7c657fdc75d1c4c2db

            </Route>

            <Route path='*' element={<Navigate to={"/"} />} />
          </Route>

        </Routes>
      </NavBarContextProvider>

    </BrowserRouter>
  </React.StrictMode>,
)