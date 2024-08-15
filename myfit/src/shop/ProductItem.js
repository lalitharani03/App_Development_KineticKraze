import React from 'react';
import { Card, CardMedia, CardContent,  Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card style={{marginLeft:"4rem",marginTop:"4rem",backgroundColor:"whitesmoke",marginRight:"4rem",height:"40vh",width:"30vh"}}>
      <CardMedia
        component="img"
        alt={product.name}
        height="180"
        image={product.image}
        sx={{objectFit:"contain"}} onClick={handleViewDetails}
      />
      <CardContent>
        <Typography variant="p" style={{fontWeight:"bold"}}>{product.name}</Typography><br></br>
        <Typography variant="p">₹{product.price}</Typography><br></br>
        <Typography variant="p">{product.rating} ★ </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;