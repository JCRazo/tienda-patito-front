import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrarPedido from './components/RegistrarPedido';
import Confirmacion from './components/Confirmacion';
import ListadoPedidos from './components/ListadoPedidos';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registrar-pedido" element={<RegistrarPedido />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
          <Route path="/pedidos" element={<ListadoPedidos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
