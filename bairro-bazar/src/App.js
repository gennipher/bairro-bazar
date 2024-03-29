import React, { useEffect, useState } from 'react';
import AppRoutes from './Routes/AppRoutes';
import Footer from './Components/Footer/Footer';

import './Styles/main.module.scss'
import { UserProvider } from './Context/UserContext'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <UserProvider>
        <AppRoutes />
        <Outlet />
      </UserProvider>
    </>
    
  );
}

export default App;
