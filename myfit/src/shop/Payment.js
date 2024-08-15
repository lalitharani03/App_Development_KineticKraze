
import React, {useState,useContext } from 'react';
import { Container, Typography, Button, Box, Grid, FormControl, InputLabel, Select, MenuItem, TextField, ListItem, ListItemAvatar, ListItemText, Avatar} from '@mui/material';
import { CartContext, useCart } from './CartContext';
import Layout from './Layout';
import './Payment.css';
import { AddressContext } from './AddressContext';
import {useNavigate} from 'react-router-dom';
import PayPalPayment from './PayPalPayment';
import axios from 'axios';
// import Product from '../assets/images/shopping.jpg';

const Payment = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  // const { cart, totalPrice } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.count), 0);
  const totalQuantity = cart.reduce((acc, item) => acc + item.count, 0);
  const { address } = useContext(AddressContext);
  const [paymentMethod, setPaymentMethod] = React.useState('creditCard');
  const [discountCode, setDiscountCode] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice);
  const [orderData, setOrderData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navigateToShippingForm = () => {
    navigate('/shipping');
  };
  

  const applyDiscount = () => {
    const discount = discountCode === 'SAVE10' ? 0.1 : 0; // 10% discount
    const newPrice = totalPrice * (1 - discount);
    setDiscountedPrice(newPrice);
  };
  const [cardDetails, setCardDetails] = React.useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  
  const handleError=(error)=>{
    console.error('PayPal Payment Error: ',error);
  };

  const handleCancel=()=>{
    console.log('Transaction cancelled');
  };

  const handleCardDetailsChange = (event) => {
    const { name, value } = event.target;
    setCardDetails({
      ...cardDetails,
      [name]: value
    });
  };

  const handlePlaceOrder = async () => {
    try {
      // Ensure orderData only includes serializable values
      const dataToSend = {
        productName: orderData.productName,
        quantity: orderData.quantity,
        price: orderData.price,
      };

      console.log('Sending Order Data:', dataToSend); // Debugging line

      const response = await axios.post('http://localhost:3000/orders', dataToSend);
      console.log('Order placed successfully:', response.data);
      // Handle success (e.g., redirect to confirmation page)
    } catch (err) {
      setError('Error placing order: ' + err.message);
      console.error('Error placing order:', err);
    }
    alert('Order Placed Successfully');
  };

  return (
    <Layout>
      <Container style={{ marginTop: '4rem' }} className='payment-page'>
        <Grid>
              <Typography variant="h5"  gutterBottom style={{fontWeight:'bold'}}>Order Summary</Typography>
            <Grid elevation={3} >
                  <Typography variant="h6" style={{marginTop:'1rem'}}>Cart Items:</Typography>
                  
              {cart.length > 0 ? (cart.map(item => (
                // <Box key={item.id} style={{ marginBottom: '0.5rem' }}>
                //   <Typography variant="body1">{item.name} - ₹{item.price} x {item.count}</Typography>
                // </Box>
                <ListItem key={item.id} className="cart-item">
                  <ListItemAvatar>
                    <Avatar src={item.images[0]} alt={item.name} className="cart-item-image" style={{height:'5rem',width:'auto'}}/>
                  </ListItemAvatar>
                  <Box className="cart-item-details">
                    <ListItemText 
                      primary={item.name}
                      secondary={`Price: ₹${item.price} | Quantity: ${item.count}`}
                     style={{marginLeft:'1rem'}} />
                  </Box>
                  </ListItem>
              ))): (<Typography>No items in cart</Typography>)}
              <Typography variant="h6" >Total Price: ₹{totalPrice.toFixed(2)}</Typography>
              <Typography variant="h6" style={{marginBottom:'2rem'}}>Discounted Price: ₹{discountedPrice.toFixed(2)}</Typography>
            </Grid>
            <Typography variant="h6" gutterBottom style={{fontWeight:'bold'}}>Apply Discount</Typography>
            <TextField
              label="Discount Code"
              variant="outlined"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <Button
              variant="contained"
              
              onClick={applyDiscount}
              className='apply-button' style={{marginTop:'0.5rem',backgroundColor:'#6A1B1A',marginLeft:'1rem'}}
            >
              Apply
            </Button>
            <Grid item xs={12} md={6}>
            {/* <ShippingAddress onSubmit={handleShippingAddressSubmit} /> */}
            <button onClick={navigateToShippingForm} style={{display: 'block', width: '25%',marginTop:'2rem',
    padding: '1em',
    backgroundColor: '#6A1B1A',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '1em',marginTop:'1rem'}}>Go to Shipping Form</button>
            {address && (
        <div className="address-summary">
          <h4 style={{marginTop:'1rem',fontWeight:'bold'}}>Shipping Address Summary</h4>
          <p>{address.fullName}</p>
          <p>{address.addressLine1} {address.addressLine2}, {address.city}</p>
          <p> {address.state} - {address.zip}</p>
          <p>{address.country}</p>
          <p><strong>Phone Number:</strong> {address.phoneNumber}</p>
        </div>
      )}
            </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className='payment-header'>Payment Method</Typography>
            <FormControl fullWidth style={{ marginTop: '20px', marginBottom: '20px' }}>
              <InputLabel id="payment-method-label">Select Payment Method</InputLabel>
              <Select
                labelId="payment-method-label"
                id="payment-method"
                value={paymentMethod}
                label="Select Payment Method"
                onChange={handlePaymentMethodChange}
              >
                <MenuItem value="creditCard">Credit Card</MenuItem>
                <MenuItem value="debitCard">Debit Card</MenuItem>
                <MenuItem value="paypal">PayPal</MenuItem>
              </Select>
            </FormControl>
            {paymentMethod === 'creditCard' && (
              <Box>
                <TextField
                  fullWidth
                  label="Card Number"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardDetailsChange}
                  style={{ marginBottom: '20px' }}
                />
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                  <TextField
                    label="Expiry Date"
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleCardDetailsChange}
                    style={{ marginRight: '10px' }}
                  />
                  <TextField
                    label="CVV"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardDetailsChange}
                  />
                </Box>
              </Box>
            )}
            {paymentMethod === 'paypal' && (
              <Grid item xs={12} md={6}>
              <PayPalPayment totalPrice={totalPrice} onError={handleError} onCancel={handleCancel} />
            </Grid>
            )}
            <Button variant="contained" onClick={handlePlaceOrder} style={{ marginTop: '20px', backgroundColor: '#6A1B1A', width: '100%' }}>
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Payment;