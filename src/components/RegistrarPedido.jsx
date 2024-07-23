import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrarPedido = () => {
  const [producto, setProducto] = useState('');
  const [cliente, setCliente] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pedido = { producto, cliente, vendedor: "Vendedor Ficticio" };
    const response = await axios.post('/api/pedidos/crear', pedido);
    navigate('/confirmacion', { state: { pedido: response.data } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Producto:</label>
      <select value={producto} onChange={e => setProducto(e.target.value)}>
        <option value="Producto 1">Producto 1</option>
        <option value="Producto 2">Producto 2</option>
        <option value="Producto 3">Producto 3</option>
      </select>
      <label>Cliente:</label>
      <input type="text" value={cliente} onChange={e => setCliente(e.target.value)} />
      <button type="submit">Enviar Pedido</button>
    </form>
  );
};

export default RegistrarPedido;