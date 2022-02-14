import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Modulos } from '../pages/Modulos';
import { Cadastro } from '../pages/Cadastro';
import { Aulas } from '../pages/Aulas';
import { Home } from '../pages/Home';
import { AddAula } from '../pages/AddAula';
import { AddModulo } from '../pages/AddModulo';
import { EditaModulo } from '../pages/EditaModulo';
import { EditaAula } from '../pages/EditaAula';

const OtherRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/modulos" element={<Modulos />} />
            <Route path="/aulas" element={<Aulas />} />
            <Route path="/addmodulo" element={<AddModulo />} />
            <Route path="/addaula" element={<AddAula />} />
            <Route path="/editamodulo/:id" element={<EditaModulo />} />
            <Route path="/editaaula/:id" element={<EditaAula />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default OtherRoutes;