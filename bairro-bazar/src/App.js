import React from 'react';
import AppRoutes from './Routes/AppRoutes';
import Footer from './Components/Footer/Footer';

import './Styles/main.module.scss'
import { UserProvider } from './Context/UserContext'

function App() {
  return (
    <>
      <UserProvider>
        <AppRoutes />
        <Footer />
      </UserProvider>
    </>
    
  );
}

export default App;
