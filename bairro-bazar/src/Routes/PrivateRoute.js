import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import Layout from '../Layout'
import Login from '../Pages/Login/Login'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [userData] = useContext(UserContext)
    const isLogged = userData.isLogged
  
    return isLogged ? <Layout /> : <Login />
  }
  
export default PrivateRoute