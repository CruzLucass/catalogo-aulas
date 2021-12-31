import React from 'react';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

import { Route, Routes } from 'react-router-dom'
import { Modulos } from './pages/Modulos';
import { Cadastro } from './pages/Cadastro';
import { Aulas } from './pages/Aulas';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/modulos" element={<Modulos />} />
        <Route path="/aulas" element={<Aulas />} />
      </Routes>
    </div>

  );
}

export default App;
