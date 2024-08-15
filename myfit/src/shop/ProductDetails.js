import Exigo from '../assets/images/assets/images/exigo2.jpg';
import Exigoimg from '../assets/images/assets/images/exigo3.jpg';
import React, { useContext, useState } from 'react';
import { useNavigate, useParams,Link } from 'react-router-dom';
import { Container, Typography, Button, ButtonGroup, Badge, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExigoImage from '../assets/images/assets/images/exigo.png';
import Slideshow from './Slideshow';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { CartContext } from './CartContext';
import Treadmill1 from '../assets/images/assets/images/treadmill1.avif';
import Treadmill2 from '../assets/images/assets/images/treadmill2.jpg';
import Treadmill3 from '../assets/images/assets/images/treadmill3.jpg';
import Kettlebells from '../assets/images/assets/images/kettlebells.jpg';
import Dumbbells from '../assets/images/assets/images/dumbells.jpg';
import Resistance from '../assets/images/assets/images/resistanceband1.webp';
import Pullupbar from '../assets/images/assets/images/pullupbar.jpg';
import Yogamat from '../assets/images/assets/images/yogamat.jpg';
import Yogamat2 from '../assets/images/assets/images/yogamat2.jpg';
import Rowing from '../assets/images/assets/images/rowing1.webp';
import './SupplementDetails.css';
import Layout from './Layout';
const products = [
  { 
    id: 1, 
    name: 'Exigo Pectoral Fly/Rear Deltoid', 
    price: 25750,
    images: [ExigoImage, Exigo, Exigoimg], 
    description: 'The Exigo Pectoral Fly/Rear Deltoid machine is a versatile and essential piece of gym equipment designed to target and strengthen the upper body muscles, specifically the chest (pectorals) and rear shoulder (deltoids) muscles. This dual-function machine provides a comprehensive workout, enhancing muscle definition and improving overall upper body strength.',
    offers: ['Get for ₹2999 with coupon', 'Additional offers available'],
    rating: 4.8,
    reviewsCount: 1200,
    vendor: 'ABC Company',
  },
  { 
    id: 2, 
    name: 'Tread Mill', 
    priceLevels: {
      entry: 8999,
      mid: 18900,
      high: 48950
    },
    images: [Treadmill1, Treadmill2, Treadmill3], 
    description: 'The Treadmill is an essential piece of fitness equipment designed to provide a versatile and effective workout for users of all fitness levels. Whether you are looking to lose weight, improve cardiovascular health, or train for a marathon, a treadmill offers a convenient and efficient way to achieve your fitness goals.',
    offers: ['Special discount available', 'Free shipping'],
    rating: 4.5,
    reviewsCount: 800,
    vendor: 'ABC Company',
    type:'treadmill',
  },
  { 
    id: 3, 
    name: 'Kettle Bells', 
    price: 3999,
    images: [Kettlebells], 
    description: 'Kettlebells are versatile and effective fitness tools designed to enhance your strength, endurance, and flexibility. Unlike traditional dumbbells, kettlebells feature a unique shape with a handle that allows for a wider range of motion and more dynamic exercises. They come in various weights and sizes, making them suitable for all fitness levels.',
    offers: ['Get for ₹999 with coupon', 'Additional offers available'],
    rating: 4.2,
    reviewsCount: 120,
    vendor: 'ABC Company',
  },
  {
    id: 4,
    name: 'Dumb Bells',
    price:999,
    images:[Dumbbells],
    description:'Dumbbells are essential for strength training, allowing for a wide variety of exercises targeting different muscle groups. They are versatile and can be used for both upper and lower body workouts.',
    offers:['Get for ₹299 with coupon','Additional offers available'],
    rating:4.0,
    reviewsCount:290,
    vendor: 'ABC Company',
  },
  {
    id: 5,
    name: 'Resistance Band',
    price:249,
    images:[Resistance],
    description:'Resistance bands are versatile and portable, perfect for strength training and rehabilitation exercises. They offer a range of resistance levels, making them suitable for beginners and advanced users alike.',
    offers:['Get for ₹99 with coupon','Additional offers available'],
    rating:4.0,
    reviewsCount:200,
    vendor: 'ABC Company',
  },
  {
    id: 6,
    name: 'Pull up Bar',
    price:12999,
    images:[Pullupbar],
    description:'Pull-up bars are essential pieces of equipment for any fitness enthusiast, providing a simple yet effective way to build upper body strength. They can be used for various exercises, including pull-ups, chin-ups, and hanging leg raises, targeting muscles in the back, shoulders, arms, and core.',
    offers:['Get for ₹999 with coupon','Additional offers available'],
    rating:4.9,
    reviewsCount:2000,
    vendor: 'ABC Company',
  },
  {
    id: 7,
    name: 'Yoga Mat',
    price:299,
    images:[Yogamat, Yogamat2],
    description:' Yoga mats provide a comfortable and non-slip surface for yoga, stretching, and other floor exercises. They are essential for creating a dedicated workout space at home.',
    offers:['Get for ₹199 with coupon','Additional offers available'],
    rating:4.9,
    reviewsCount:2000,
    vendor: 'ABC Company',
  },
  {
    id:8,
    name:'Rowing Machine',
    price:10999,
    images:[Rowing],
    description:'Rowing machines offer a full-body workout, combining cardiovascular exercise with strength training. They simulate the motion of rowing on water.',
    offers:['Get for ₹999 with coupon','Additional offers available'],
    rating:4.5,
    reviewsCount:876,
    vendor:'AC Company'
  }
];

const recommendedProducts=[
  { 
    id: 1, 
    name: 'Exigo Pectoral Fly/Rear Deltoid', 
    price: 25999,
    image:ExigoImage, 
    offers: ['Get for ₹2999 with coupon', 'Additional offers available'],
    rating: 4.8,
  },
  { 
    id: 2, 
    name: 'Tread Mill', 
    price:8999,
    image:Treadmill1, 
    offers: ['Special discount available', 'Free shipping'],
    rating: 4.5,
  },
  { 
    id: 3, 
    name: 'Kettle Bells', 
    price: 3999,
    image: Kettlebells, 
    offers: ['Get for ₹999 with coupon', 'Additional offers available'],
    rating: 4.2,
  },
  {
    id: 4,
    name: 'Dumb Bells',
    price:999,
    image:Dumbbells,
    offers:['Get for ₹299 with coupon','Additional offers available'],
    rating:4.0,
  },
  {
    id: 5,
    name: 'Resistance Band',
    price:499,
    image:Resistance,
    offers:['Get for ₹99 with coupon','Additional offers available'],
    rating:4.0,
  },
  {
    id: 6,
    name: 'Pull up Bar',
    price:12999,
    image:Pullupbar,
    offers:['Get for ₹999 with coupon','Additional offers available'],
    rating:4.9,
  },
  {
    id: 7,
    name: 'Yoga Mat',
    price:299,
    image:Yogamat,
    offers:['Get for ₹199 with coupon','Additional offers available'],
    rating:4.9,
  },
  {
    id:8,
    name:'Rowing Machine',
    price:10999,
    image:Rowing,
    offers:['Get for ₹999 with coupon','Additional offers available'],
    rating:4.5,
  }
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };
 return(
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" onClick={handleViewDetails}/>
    <h3 className="product-name">{product.name}</h3>
    <p style={{fontWeight:'bold'}}>{product.rating} ★ </p>
    <p style={{fontWeight:'bold'}}>₹{product.price}</p>
    <p className="product-price">{product.offers} </p>
  </div>
 );
};


const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [count, setCount] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState('mid'); 
  const { addToCart } = useContext(CartContext); 

  if (!product) return <Typography>Product not found</Typography>;

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleAddToCart = () => {
    const price = product.priceLevels ? product.priceLevels[selectedLevel] : product.price;
    addToCart({ ...product, price, count });
  };
  const filteredRecommendedProducts = recommendedProducts.filter(p => p.id !== product.id);

  return (
    <Layout>
    <Container style={{marginTop:"4rem"}}>
      <Box display="flex" flexDirection="row" gap={4}>
        <Box width="50%">
          <Slideshow images={product.images} />
        </Box>
        <Box width="50%">
          <Typography variant="h4" sx={{fontWeight:'bold'}}>{product.name}</Typography>
          
          {product.type === 'treadmill' && (
            <FormControl fullWidth style={{ marginTop: '20px', marginBottom: '20px' }}>
              <InputLabel id="treadmill-level-label">Treadmill Level</InputLabel>
              <Select
                labelId="treadmill-level-label"
                id="treadmill-level"
                value={selectedLevel}
                label="Treadmill Level"
                onChange={handleLevelChange}
              >
                <MenuItem value="entry">Entry</MenuItem>
                <MenuItem value="mid">Mid</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </Select>
            </FormControl>
          )}

          {product.type === 'treadmill' ? (
            <Typography variant="h4">₹{product.priceLevels[selectedLevel]}</Typography>
          ) : (
            <Typography variant="h4">₹{product.price}</Typography>
          )}
          
          <Typography style={{ marginTop: '20px' }}>{product.description}</Typography>
          {product.offers.map((offer, index) => (
            <Typography key={index}  style={{ marginTop: '10px',color:'red' }}>
              {offer}
            </Typography>
          ))}
          <Typography style={{ marginTop: '10px' }}>
            <strong>Rating:</strong> {product.rating} ★ ({product.reviewsCount} reviews)
          </Typography>
          <div style={{ marginTop: '20px' }}>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => setCount(Math.max(count - 1, 0))}
                style={{ marginRight: '3vh', backgroundColor: 'wheat' }}
              >
                <RemoveIcon fontSize="small" style={{ color: '#6A1B1A' }} />
              </Button>
              <Badge  sx={{
        '& .MuiBadge-badge': {
          backgroundColor: 'wheat',
          color: 'black', // Adjust the text color for better contrast if needed
        },
      }} badgeContent={count}>
                <ShoppingCartIcon />
              </Badge>
              <Button
                aria-label="increase"
                onClick={() => setCount(count + 1)}
                style={{ marginLeft: '3vh', backgroundColor: 'wheat' }}
              >
                <AddIcon fontSize="small" style={{ color: '#6A1B1A' }} />
              </Button>
            </ButtonGroup>
          </div>
          <div style={{display:'flex'}}>
          <Button variant="contained" style={{ marginTop: '20px', backgroundColor: '#6A1B1A', width: '100%',marginRight:'1rem' }} onClick={handleAddToCart}>
            Add To Cart
          </Button>
          <Button component={Link} to='/cart' variant='contained' style={{backgroundColor:'#6A1B1A',height:'5vh',marginTop:'3vh'}} ><LocalMallIcon/></Button>
          </div>
          <Typography style={{ marginTop: '10px', fontWeight: 'bold' }}>
            Sold by: {product.vendor}
          </Typography>
        </Box>
      </Box>
    </Container>
    <div className="supplement-details">
    <h2>You Might Also Like</h2>
    <div className="recommended-products">
      {filteredRecommendedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
  </Layout>
  );
};

export default ProductDetails;