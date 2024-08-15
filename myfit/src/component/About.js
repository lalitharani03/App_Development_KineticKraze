// import React from 'react';
// import { Container, Typography, Box, Link, Divider } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { grey } from '@mui/material/colors';
// import Layout from '../shop/Layout';

// const AboutPage = () => {
//   return (
//     <div>
//     <Container sx={{ mt: 4, textAlign:'center',bgcolor: '#F5F5F5', p: 3, borderRadius: 2, boxShadow: 3,mb: 4 }}>
//       <Box sx={{ bgcolor: '#F5F5F5', p: 5, borderRadius: 2, boxShadow: 3 }}>
//         <Typography variant="h3" component="h1" gutterBottom >
//           Our Story
//         </Typography>
//         <Typography variant="body1" component="p" gutterBottom >
//           We are third-year students of Information Technology. For our projects, we chose to develop this fitness website. We researched the drawbacks of some other fitness websites and are striving to rectify them with our platform.
//         </Typography>
//         <Typography variant="body1" component="p" gutterBottom >
//           Our goal is to provide a comprehensive and user-friendly fitness website that addresses common issues faced by users,
//           ensuring a better experience for everyone.
//         </Typography>

//         <Divider sx={{ my: 4, bgcolor: 'lightgray' }} />

//         <Box sx={{ mt: 5 }}>
//           <Typography variant="h4" component="h2" gutterBottom>
//             Reach Us
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//               <PhoneIcon sx={{ mr: 1 }} />
//               <Typography variant="body1">+123-456-7890</Typography>
//             </Box>
//             <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//               <LocationOnIcon sx={{ mr: 1 }} />
//               <Typography variant="body1">123 Fitness St, Health City, HC 45678</Typography>
//             </Box>
//             <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
//               <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                 <FacebookIcon sx={{ fontSize: 40 }} />
//               </Link>
//               <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                 <InstagramIcon sx={{ fontSize: 40 }} />
//               </Link>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//     </div>
//   );
// };

// export default AboutPage;
import React from 'react';
import { Container, Typography, Box, Link, Divider, List, ListItem, ListItemText, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import Navbar from '../shop/Navbar';
import aboutUsImage2 from '../assets/images/qm.jpeg';
import aboutUsImage1 from '../assets/images/yoga.jpeg';
import aboutUsImage3 from '../assets/images/bg.webp';

const CombinedPage = () => {

  const sections = [
    {
      title: "Our Story",
      description: (<Typography sx={{fontSize:"1.3rem"}}>Welcome to <strong>Kinetic Kraze!</strong> We’re a team of code brigade who happen to be third-year Information Technology students. Why did we choose to create a fitness website? Well, let’s just say we got tired of the same old, same old. After all, who wouldn’t want a fitness platform that’s as ambitious as a late-night gym session ?We dug into the world of fitness websites and found them a bit… well, uninspired. So, we decided to shake things up. Our goal? To create a fitness website that not only gets you pumped up but also makes you think, “Why didn’t I find this sooner?”</Typography>
      ),
      image: aboutUsImage1,
      alignLeft: true,
    },
    {
      title: "Why Kinetic Kraze?",
      description: (
        <div>
          <Typography variant="body1" component="p" sx={{fontSize:"1.3rem"}}>
            <strong>Workouts That Actually Work:</strong> Our site isn’t just about endless scrolling. We’ve got Yoga, Cardio, Strength Training – the whole shebang. If it doesn’t get you moving, it’s not on our site.
          </Typography>
          <Typography variant="body1" component="p" sx={{fontSize:"1.3rem"}}>
            <strong>Chatbot Magic:</strong> Ever wished for a fitness guru who doesn’t get tired of your questions? Meet our chatbot – your new best friend in fitness. Ask away, and get answers faster than you can say “personal trainer.”
          </Typography>
          <Typography variant="body1" component="p" sx={{fontSize:"1.3rem"}}>
            <strong>Shop Till You Drop:</strong> Looking to bulk up or slim down? Our integrated store’s got protein powders, health products, and gym gear. It’s like having a fitness store in your pocket – minus the awkward sales pitches.
          </Typography>
          <Typography variant="body1" component="p" sx={{fontSize:"1.3rem"}}>
            <strong>Find Your Fitness Tribe:</strong> Why work out alone? Our gym finder helps you locate the coolest gyms near you. Because who needs to be a lone wolf when you can join a pack?
          </Typography>
        </div>
      ),
      image: aboutUsImage2,
      alignLeft: false,
    },
  ];
  return (
    <>
    <Navbar/>
    <Container>
      <Typography variant="h3" gutterBottom align="center" sx={{marginTop:'5px'}}>
        About Us
      </Typography>
      {sections.map((section, index) => (
        <Grid container spacing={4} key={index} sx={{ marginY: 4, alignItems: 'center' }}>
          {section.alignLeft ? (
            <>
              <Grid item xs={12} md={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <img src={section.image} alt={section.title} style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom>
                  {section.title}
                </Typography>
                <Typography variant="body1">{section.description}</Typography>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom>
                  {section.title}
                </Typography>
                <Typography variant="body1">{section.description}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <img src={section.image} alt={section.title} style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      ))}
    </Container>
    </>
  );
};

export default CombinedPage;