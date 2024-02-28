import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Vehicles from './components/pages/Vehicles.jsx'
import AdminHome from './components/pages/admin/AdminHome.jsx'
import AdminVehiclesList from './components/pages/admin/AdminVehiclesList.jsx'
import DetailsCar from './components/pages/DetailsCar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/admin-home' element={<AdminHome />} />
        <Route path='/admin-vehicles-list' element={<AdminVehiclesList />} />

        <Route path='/' element={<App />}>
          <Route path='/' element={<Vehicles />} />
          <Route path='/vehicles/:id' element={<DetailsCar />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
