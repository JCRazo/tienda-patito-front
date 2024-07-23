import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmacion = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pedido } = location.state;

  return (
    <div>
      <h1>Confirmación de Pedido</h1>
      <p>Producto: {pedido.producto}</p>
      <p>Vendedor: {pedido.vendedor}</p>
      <p>Cliente: {pedido.cliente}</p>
      <button onClick={() => navigate('/pedidos')}>Ver Pedidos</button>
    </div>
  );
};

export default Confirmacion;