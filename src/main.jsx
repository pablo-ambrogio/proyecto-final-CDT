import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import LoginAdmin from './components/pages/admin/LoginAdmin.jsx'
import Vehicles from './components/pages/Vehicles.jsx'
import AdminHome from './components/pages/admin/AdminHome.jsx'
import AdminVehiclesList from './components/pages/admin/AdminVehiclesList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/admin" element={<LoginAdmin />} />
        <Route path='/admin-home' element={<AdminHome />} />
        <Route path='/admin-vehicles-list' element={<AdminVehiclesList />} />

        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/vehicles' element={<Vehicles />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
