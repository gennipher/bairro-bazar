import React, { useEffect, useState } from 'react'
import AppRoutes from './Routes/AppRoutes'
import { UserProvider } from './Context/UserContext'
import { Outlet } from 'react-router-dom'
import api from './Services/api'
import './Styles/main.module.scss'

function App() {
  const [userData, setUserData] = useState({
    isLogged: false,
    email: '',
    firstName: '',
    lastName: '',
    neighborhood: '',
    token: ''
  })

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.post('/verify-token', { token })
        .then(response => {
          const { firstName, lastName, neighborhood, email } = response.data.user;
          setUserData({
            isLogged: true,
            email,
            firstName,
            lastName,
            neighborhood,
            token
          })
        })
        .catch(error => {
          localStorage.removeItem('token');
          setUserData({
            isLogged: false,
            email: '',
            firstName: '',
            lastName: '',
            neighborhood: '',
            token: ''
          })
        })
    }
  }, [])

  return (
    <>
      <UserProvider value={[userData, setUserData]}>
        <AppRoutes />
        <Outlet />
      </UserProvider>
    </>
  )
}

export default App
