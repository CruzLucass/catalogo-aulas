import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Modulos } from '../pages/Modulos';
import { Cadastro } from '../pages/Cadastro';
import { Aulas } from '../pages/Aulas';
import { Home } from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';

const OtherRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/modulos" element={<Modulos />} />
            <Route path="/aulas" element={<Aulas />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default OtherRoutes;