import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Grid,
  Box,
  Container,
  IconButton
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/Register.png';
import '../css/Registration.css'
import { ArrowBack } from '@mui/icons-material';

const Registration =()=>{

    const [customerid, setId] = useState('');
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customer, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => await loadCustomers())();
  }, []);

  async function loadCustomers() {
    const result = await axios.get("http://localhost:8080/api/registers/get");
    setCustomers(result.data);
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateInteger = (value) => {
    return /^\d+$/.test(value);
  };
  const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  async function save(event) {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert("Invalid email format");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    if (!validateInteger(age)) {
      alert("Age must be valid integers");
      return;
    }

    if (!validateInteger(mobile)) {
      alert("Mobile number must be a valid integer");
      return;
    }

    if (!validateMobile(mobile)) {
      alert("Mobile number must be 10 digits");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/registers/post", {
        fname: fname,
        lname: lname,
        address: address,
        age: age,
        mobile: mobile,
        email: email,
        password: password
    });
    alert("Customer Registration Successfully");
    setId("");
    setFName("");
    setLName("");
    setAddress("");
    setAge("");
    setMobile("");
    setEmail("");
    setPassword("");
    loadCustomers();
      navigate('/register');
    } catch (err) {
      alert("User Registration Failed");
    }
  }

  const handleBack = () => {
    navigate(-1); // This will navigate to the previous page
  };
  return(
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
      </div>
      <div style={{ flex: 1, display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center',marginLeft:"4rem" }}>
      <IconButton onClick={handleBack} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <ArrowBack />
      </IconButton>
        <div className='signIn' style={{ width: '100%', maxWidth: '400px' ,marginRight:'2rem',textAlign:"center",marginTop:"2rem",marginBottom:"2rem"}}>
          <h2 style={{fontFamily:'cursive'}}>Sign in</h2>
        </div>
    <Grid container spacing={2} xs={40}sx={{marginRight:'2cm'}}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              value={fname}
              onChange={(event) => setFName(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lname}
              onChange={(event) => setLName(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              value={age}
              onChange={(event) => setAge(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mobile"
              variant="outlined"
              fullWidth
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" style={{backgroundColor:'#6A1B1A'}} onClick={save} >Register</Button>
          </Grid>
          <Grid item xs={12}>

         <a href='/login'style={{textDecoration:'none',color:'black'}}>Already have an account?</a>
         <a href='/login' style={{marginLeft:"0.5rem",textDecoration:'none'}}>Login</a>
          </Grid>
        </Grid>
        </div>
        </div>
  )
}
export default Registration;