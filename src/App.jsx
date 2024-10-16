import React from 'react'
import UserForm from './pages/UserForm'
import AdminLogin from './pages/AdminLogin'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' Component={UserForm}/>
      <Route path='/admin-login' Component={AdminLogin} />
    </Routes>
  )
}

export default App