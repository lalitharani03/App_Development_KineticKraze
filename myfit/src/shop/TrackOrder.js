import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderTracking = ({ orderId }) => {
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
      <h1>Order Tracking</h1>
      <p>Order ID: {order.id}</p>
      <p>Status: {order.status}</p>
      <p>Total Price: ${order.totalPrice}</p>
      <p>Payment Method: {order.paymentMethod}</p>
      <p>Tracking Number: {order.trackingNumber || 'Not Available'}</p>
    </div>
  );
};

export default OrderTracking;
