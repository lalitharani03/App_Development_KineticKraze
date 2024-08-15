import React, { useRef, useState } from 'react';
import axios from 'axios';
import '../css/Home.css';
import NavBar from './Navbar';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { BsChatHeartFill } from "react-icons/bs";
import { useNavigate, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Chatbot from './Chatbot'; // Import the Chatbot component

const Home = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentSubmenu, setCurrentSubmenu] = useState([]);

  const handleRegisterClick = () => {
    alert("You have clicked the register button!");
  };

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleMenuOpen = (event, submenu) => {
    setAnchorEl(event.currentTarget);
    setCurrentSubmenu(submenu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentSubmenu([]);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <>
      <div className='hero'>
        <NavBar/>
        <Container maxWidth="lg" sx={{ marginTop: 8 }}>
          <Box sx={{ color: "white", textAlign: "center", padding: "50px 0", mt: "10rem" }}>
            <Typography variant="h2" component="h1" sx={{ fontFamily: "sans-serif",fontWeight:"bold"}}>
            Igniting transformation through the power of exercise
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: 7,backgroundColor:'#6A1B1A',transform: 'translateY(-50%)',width:'130px',height:'50px',fontFamily:'Gupiter',fontSize:'20px',
                
                '&:hover': {
                   backgroundColor: '#800000',
                  
                },
                position: 'relative',
              }}
              onClick={() => handleMenuItemClick('/registration')}
            >
              Register
            </Button>
          </Box>
        </Container>
        <div style={{ position: 'relative', height: '100vh' }}>
           {/* <Chatbot /> */}
          <IconButton
            sx={{
              position: 'fixed',
              top: '85%',
              right: '40px',
              transform: 'translateY(-50%)'
            }}
            onClick={() => handleMenuItemClick('/chatbot')}
          >
            <BsChatHeartFill size={50} color="#FF4C4C" />
          </IconButton>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
