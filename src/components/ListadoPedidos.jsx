import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListadoPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const cliente = "nombre_del_cliente";

  useEffect(() => {
    const obtenerPedidos = async () => {
      const response = await axios.get(`/api/pedidos/cliente/${cliente}`);
      setPedidos(response.data);
    };
    obtenerPedidos();
  }, [cliente]);

  const cancelarPedido = async (id) => {
    await axios.delete(`/api/pedidos/cancelar/${id}`);
    setPedidos(pedidos.filter(pedido => pedido.id !== id));
  };

  return (
    <div>
      <h1>Listado de Pedidos</h1>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Status</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(pedido => (
            <tr key={pedido.id}>
              <td>{pedido.producto}</td>
              <td>{pedido.status}</td>
              <td>
                {pedido.status === 'pendiente' && (
                  <button onClick={() => cancelarPedido(pedido.id)}>Cancelar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPedidos;