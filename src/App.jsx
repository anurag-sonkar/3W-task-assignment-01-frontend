import React from 'react'
import UserForm from './pages/UserForm'
import AdminLogin from './pages/AdminLogin'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path='/' Component={UserForm}/>
      <Route path='/admin-login' Component={AdminLogin} />
      <Route path='/admin-dashboard' Component={Dashboard} />
    </Routes>
  )
}

export default App