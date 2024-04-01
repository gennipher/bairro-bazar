import React from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import BoasVindas from "../Pages/BoasVindas/BoasVindas"
import Login from "../Pages/Login/Login"
import Cadastro from "../Pages/Cadastro/Cadastro"
import NovoProduto from "../Pages/NovoProduto/NovoProduto"
import EditarPerfil from "../Pages/EditarPerfil/EditarPerfil"
import MeusAnuncios from "../Pages/MeusAnuncios/MeusAnuncios"
import PrivateRoute from './PrivateRoute'
import Suporte from "../Pages/Suporte/Suporte";

function AppRoutes() {    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BoasVindas />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<PrivateRoute />} >
                    <Route path="" element={<Home />} />
                    <Route path="novoProduto" element={<NovoProduto />} />
                    <Route path="editar-perfil" element={<EditarPerfil />} />
                    <Route path="meus-anuncios" element={<MeusAnuncios />} />
                    <Route path="suporte" element={<Suporte />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes