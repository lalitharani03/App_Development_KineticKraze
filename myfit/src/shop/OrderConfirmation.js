import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderConfirmation = ({ orderId }) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`/orders/${orderId}`);
        setOrder(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Order ID: {order.id}</p>
      <p>Status: {order.status}</p>
      <p>Date: {new Date(order.date).toLocaleDateString()}</p>
      <h2>Items:</h2>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <h2>Total Price: ${order.totalPrice}</h2>
    </div>
  );
};

export default OrderConfirmation;
