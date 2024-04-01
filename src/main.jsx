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
import Login from './components/pages/Login.jsx'
import AdminCategories from './components/pages/admin/AdminCategories.jsx'
import AdminCharacteristics from './components/pages/admin/AdminCharacteristics.jsx'
import AdminAddUser from './components/pages/admin/AdminAddUser.jsx'
import AdminConfiguration from './components/pages/admin/AdminConfiguration.jsx'
import AdminReserve from './components/pages/admin/AdminReserve.jsx'
import AdminAddVehicles from './components/pages/admin/AdminAddVehicles.jsx'
import NavBarContextProvider from './context/NavbarContext.jsx'
import AdminCategoriesList from './components/pages/admin/AdminCategoriesList.jsx'
import Favorite from './components/pages/Favorite.jsx'
import FilterContextProvider from './context/FilterContext.jsx'
import AuthAdminContextProvider from './context/AuthAdminContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>

      <NavBarContextProvider>
        <FilterContextProvider>
          <AuthAdminContextProvider>
            <Routes>
              <Route path='/' element={<App />}>

                <Route path='/' element={<Vehicles />} />
                <Route path="favorite" element={<Favorite />} loader={({ params, request }) => {
                  console.log(params);
                  console.log(request);
                }} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path='vehicles/:id' element={<DetailsCar />} />
                <Route path='login' element={<Login />} />

                <Route element={<ProtectedRoute />}>

                  <Route path='/admin' element={<AdminHome />}>

                    <Route path='/admin' element={<AdminVehiclesList />} />

                    <Route path='add-vehicle' element={<AdminAddVehicles />} />
                    <Route path='add-vehicle/:id' element={<AdminAddVehicles />} />
                    <Route path='vehicles-list' element={<AdminVehiclesList />} />
                    <Route path='categories' element={<AdminCategories />} />
                    <Route path='categories-list' element={<AdminCategoriesList />} />
                    <Route path='characteristics' element={<AdminCharacteristics />} />

                    <Route path='reserve' element={<AdminReserve />} />
                    <Route path='add-users' element={<AdminAddUser />} />
                    <Route path='configuration' element={<AdminConfiguration />} />
                  </Route>

                </Route>

                <Route path='*' element={<Navigate to={"/"} />} />
              </Route>

            </Routes>
          </AuthAdminContextProvider>
        </FilterContextProvider>
      </NavBarContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)