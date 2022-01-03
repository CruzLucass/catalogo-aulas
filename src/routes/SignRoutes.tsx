import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';

import { Login } from '../pages/Login';

const SignRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Login />} />
        </Routes>
    );
};

export default SignRoutes;