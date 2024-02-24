import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home/Home'
import Dashboard from "../Pages/Dashboard/Dashboard";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes