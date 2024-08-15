
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddressContext } from './AddressContext';
import './ShippingAddress.css';

const ShippingAddress = () => {
  const { setAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddress(formData);
    navigate('/payment');
  };

  return (
    <form onSubmit={handleSubmit} className="shipping-form" style={{marginTop:'4rem',marginBottom:'4rem'}}>
      <h2>Shipping Address</h2>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Address Line 1</label>
        <input
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Address Line 2</label>
        <input
          type="text"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Zip Code</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default ShippingAddress;