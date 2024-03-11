import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { UserContext } from "../Context/UserContext";

import Home from '../Pages/Home/Home'
import BoasVindas from "../Pages/BoasVindas/BoasVindas";
import Login from "../Pages/Login/Login";
import Cadastro from "../Pages/Cadastro/Cadastro";
import NovoProduto from "../Pages/NovoProduto/NovoProduto";


function AppRoutes() {
    const [userData, setUserData] = useContext(UserContext)
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BoasVindas />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/NovoProduto" element={<NovoProduto />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes