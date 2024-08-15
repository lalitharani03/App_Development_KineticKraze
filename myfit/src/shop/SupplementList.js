
import React, { useState } from 'react';
import { Grid} from '@mui/material';
import SupplementFilters from './SupplementFilters';
import SupplementItem from './SupplementItem';
import Whey from '../assets/images/assets/images/wheyprotein.png';
import Plantbased from '../assets/images/assets/images/plantbased.png';
import Casein from '../assets/images/assets/images/casein.png';
import Collagen from '../assets/images/assets/images/collagen.png';
import Eggwhite from '../assets/images/assets/images/eggwhite.png';
import Pea from '../assets/images/assets/images/peaprotein.png';
import Soy from '../assets/images/assets/images/soyprotein.png';
import Creatine from '../assets/images/assets/images/creatine.png';
import Fishoil from '../assets/images/assets/images/fishoil.jpg';
import CreatineCapsule from '../assets/images/assets/images/creatinecapsule.png';
import Layout from './Layout';
import './SupplementList.css';
import BCAA from '../assets/images/assets/images/bcaacapsule.png'
import Multivitamin from '../assets/images/assets/images/multivitamin.jfif'

const allProducts = [
  { id: 1, name: 'Whey Protein', price: 1050, image: Whey, rating: 4.8, type: 'Proteins', brand: 'Brand A',dietaryPreference:'Vegetarian',form:'Powder' },
  { id: 2, name: 'Casein Protein', price: 1680, image: Casein, rating: 4.5,type: 'Proteins',brand: 'Brand B',dietaryPreference:'Vegetarian',form:'Powder' },
  { id: 3, name: 'Plant Based Protein', price: 1999, image: Plantbased, rating: 4.1,type: 'Proteins',brand: 'Brand C',dietaryPreference:'Vegan',form:'Powder' },
  { id: 4, name: 'Collagen Protein', price: 2080, image: Collagen, rating: 4.1,type: 'Proteins',brand: 'Brand B',dietaryPreference:'Gluten-Free',form:'Powder' },
  { id: 5, name: 'Egg White Protein', price: 2499, image: Eggwhite, rating: 4.1,type: 'Proteins',brand: 'Brand B',dietaryPreference:'Vegetarian',form:'Powder' },
  { id: 6, name: 'Soy Protein', price: 1300, image: Soy, rating: 4.7,type: 'Proteins',brand: 'Brand B',dietaryPreference:'Vegan',form:'Powder' },
  { id: 7, name: 'Pea Protein', price: 1680, image: Pea, rating: 4.6,type: 'Proteins',brand: 'Brand B' ,dietaryPreference:'Vegan',form:'Powder'},
  { id: 8, name: 'Creatine Monohydrate', price: 2380, image: Creatine, rating: 4.5,type: 'Amino Acid',brand: 'Brand B' ,dietaryPreference:'Gluten-Free',form:'Powder'},
  { id: 9, name: 'Fish Oil Capsule',price:949,image: Fishoil, rating: 3.8, form:'Capsule',brand: 'Brand C',dietaryPreference:'Gluten-Free'},
  { id: 10, name: 'BCAA Capsule', price:999,image: BCAA, rating:3.0, form:'Capsule',brand: 'Brand A',dietaryPreference:'Vegetarian'},
  { id: 11, name: 'Creatine Capsule', price:549,image: CreatineCapsule, rating:2.9, form:'Capsule',brand: 'Brand A',dietaryPreference:'Gluten-Free'},
  { id: 12, name: 'MultiVitamin Capsule', price:529,image: Multivitamin, rating:2.9, form:'Capsule',brand: 'Brand A',dietaryPreference:'Gluten-Free'},
];

const SupplementList = () => {
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
          <SupplementFilters onFilterChange={handleFilterChange} />
      <div style={{ flex: 1, paddingLeft: '20px',marginRight:'3rem'
       }}>
        <Grid container spacing={2}>
          {filteredProducts.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <SupplementItem product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
          </div>
    </Layout>
  );
};

export default SupplementList;