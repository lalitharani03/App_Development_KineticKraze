import React, { useState } from 'react';
import axios from 'axios';

const UpdateTrackingForm = ({ orderId }) => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/orders/${orderId}/tracking`, { trackingNumber });
      alert('Tracking number updated!');
    } catch (err) {
      alert('Error updating tracking number');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="trackingNumber">Tracking Number</label>
        <input
          type="text"
          id="trackingNumber"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update Tracking Number</button>
    </form>
  );
};

export default UpdateTrackingForm;
