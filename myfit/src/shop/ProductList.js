import React,{useState} from 'react';
import { Grid } from '@mui/material';
import ProductItem from './ProductItem';
import Image from '../assets/images/assets/images/exigo.png';
import Treadmill1 from '../assets/images/assets/images/treadmill1.avif';
import Kettlebells from '../assets/images/assets/images/kettlebells.jpg';
import Dumbbells from '../assets/images/assets/images/dumbells.jpg';
import Resistance from '../assets/images/assets/images/resistanceband1.webp';
import Pullupbar from '../assets/images/assets/images/pullupbar.jpg';
import Yogamat from '../assets/images/assets/images/yogamat.jpg';
import Rowing from '../assets/images/assets/images/rowing1.webp';
import Layout from './Layout';
import ProductFilters from './ProductFilters';
const allProducts = [
  { id: 1, name: 'Exigo Pectoral Fly/Rear Deltoid', price: 25750, image: Image, rating:4.8,brand:'Brand A',type:'Rear Deltoid' },
  { id: 2, name: 'Tread Mill', price: 8999, image: Treadmill1,rating:4.5,type:"Tread  Mill",brand:'Brand B' },
  {id: 3, name:'Kettlebells',price:3999, image: Kettlebells,rating:4.1,type:"Kettlebells",brand:'Brand C'},
  {id:4,name:'Dumbbells',price:999,image: Dumbbells,rating:4.1,type:"Dumbbells",brand:'Brand A'},
  {id: 5, name:'Resistance Band',price:249,image:Resistance,rating:4.1,type:"Resistance Band",brand:'Brand C'},
  {id:6,name:'Pull up Bar',price:12999,image:Pullupbar,rating:4.7,type:"Pull up Bar",brand:'Brand B'},
  {id:7,name:'Yoga Mat',price:299,image:Yogamat,rating:4.6,type:"Yoga Mat",brand:'Brand A'},
  {id: 8,name:'Rowing Machine',price:10999,image:Rowing,rating:4.5,type:"Rowing Machine",brand:'Brand B'},
];

const ProductList = () => {
  const [filters, setFilters] = useState({});
  
    const handleFilterChange = (newFilters) => {
      setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
    };
  
    const filteredProducts = allProducts.filter(product => {
      const { priceRange = [], brands = [], types = [], flavors = [], dietaryPreferences = [], form, goal, ratings } = filters;
  
      const isInPriceRange = !priceRange.length || priceRange.some(range => {
        const [min, max] = range.split('-').map(Number);
        return product.price >= min && (max ? product.price <= max : true);
      });
  
      const isInBrand = !brands.length || brands.includes(product.brand);
      const isInType = !types.length || types.includes(product.type);
      const isInFlavor = !flavors.length || flavors.includes(product.flavor);
      const isInDietaryPreference = !dietaryPreferences.length || dietaryPreferences.includes(product.dietaryPreference);
      const isInForm = !form || form === product.form;
      const isInGoal = !goal || goal === product.goal;
      const isInRating = !ratings || product.rating >= ratings;
  
      return isInPriceRange && isInBrand && isInType && isInFlavor && isInDietaryPreference && isInForm && isInGoal && isInRating;
    });
  return (
    <Layout>
      <div style={{display:'flex'}}>
      <ProductFilters onFilterChange={handleFilterChange}/>
      <div style={{ flex: 1, paddingLeft: '20px',marginRight:'3rem'}}>

    <Grid container spacing={2} >
      {filteredProducts.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
    </div>
    </div>
    </Layout>
  );
};

export default ProductList;