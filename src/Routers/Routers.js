import React from 'react'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { Route, Routes } from 'react-router-dom'
import { AddNewCar } from '../Pages/AddNewCar/AddNewCar'
import { Dashboard } from '../Pages/Dashboard/Dashboard'
import { ListCar } from '../Pages/ListCar/ListCar'
import { Login } from '../Pages/Login/Login'

export const Routers = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/NavbarDefault' element={<NavbarCollapse/>} />
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/ListCar' element={<ListCar/>} />
      <Route path='/AddNewCar' element={<AddNewCar/>} />

    </Routes>
    
    
    </div>
  )
}

