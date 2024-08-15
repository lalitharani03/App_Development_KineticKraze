import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Layout from '../shop/Layout';

const PositivePointsPage = () => {
  return (
    <div>
    <Container sx={{ mt: 4,mb:4, textAlign: 'center', bgcolor: '#F5F5F5', p: 5, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Why Choose Our Kinetic Kraze?
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        We have developed our fitness website with a focus on providing the best experience for our users. Here are some of the key benefits of using our platform:
      </Typography>
      
      <Divider sx={{ my: 4, bgcolor: 'lightgray' }} />
      
      <Box sx={{ textAlign: 'left', maxWidth: 600, margin: '0 auto' }}>
        <List>
          <ListItem>
            <StarIcon sx={{ mr: 2, color: 'gold' }} />
            <ListItemText primary="Comprehensive Workouts: A wide range of workout options including Yoga, Cardio, and Strength Training to suit all fitness levels." />
          </ListItem>
          <ListItem>
            <StarIcon sx={{ mr: 2, color: 'gold' }} />
            <ListItemText primary="Our Kinetic Kraze has an Chatbot .. you no need to go out and search for it. You can ask our experts itself." />
          </ListItem>
          <ListItem>
            <StarIcon sx={{ mr: 2, color: 'gold' }} />
            <ListItemText primary="Depending upon your health conditions you can place your order of protein powders and some health products and also you can order your gym equipments and necessary equipments." />
          </ListItem>
          <ListItem>
            <StarIcon sx={{ mr: 2, color: 'gold' }} />
            <ListItemText primary="While if you prefer to go to gym we will suggest you the best gym around your region." />
          </ListItem>
        </List>
      </Box>
    </Container>
    </div>
  );
};

export default PositivePointsPage;
