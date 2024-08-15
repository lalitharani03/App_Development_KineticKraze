
import React, { useState } from 'react';
import './SupplementFilters.css';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Typography, Select, MenuItem, FormLabel } from '@mui/material';

const ProductFilters = ({ onFilterChange }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const [selectedRatings, setSelectedRatings] = useState(0);

  const handlePriceRangeChange = (event) => {
    const { value } = event.target;
    const updatedPriceRange = selectedPriceRange.includes(value)
      ? selectedPriceRange.filter(item => item !== value)
      : [...selectedPriceRange, value];

    setSelectedPriceRange(updatedPriceRange);
    onFilterChange({ priceRange: updatedPriceRange });
  };

  const handleBrandChange = (event) => {
    const { value } = event.target;
    setSelectedBrands(value);
    onFilterChange({ brands: value });
  };

  const handleTypeChange = (event) => {
    const { value } = event.target;
    setSelectedTypes(value);
    onFilterChange({ types: value });
  };


  const handleRatingsChange = (event) => {
    const { value } = event.target;
    setSelectedRatings(value);
    onFilterChange({ ratings: value });
  };

  return (
    <div className='filters-container'>
      <Typography className="filter-title" variant="h6">Filters</Typography>

      <FormControl component="fieldset" className="filter-group">
        <FormLabel component="legend">Price Range</FormLabel>
        <FormGroup>
          {['0-5000', '5000-15000', '15000-30000', '30000+'].map(range => (
            <FormControlLabel
              key={range}
              control={
                <Checkbox
                  checked={selectedPriceRange.includes(range)}
                  onChange={handlePriceRangeChange}
                  value={range}
                />
              }
              label={`Up to ${range}`}
            />
          ))}
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset" className="filter-group">
        <FormLabel component="legend">Brand</FormLabel>
        <Select
          multiple
          value={selectedBrands}
          onChange={handleBrandChange}
          renderValue={(selected) => selected.join(', ')}
          className="filter-select"
        >
          <MenuItem value="Brand A">Brand A</MenuItem>
          <MenuItem value="Brand B">Brand B</MenuItem>
          <MenuItem value="Brand C">Brand C</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset" className="filter-group">
        <FormLabel component="legend">
            Equipment
        </FormLabel>
        <Select
          multiple
          value={selectedTypes}
          onChange={handleTypeChange}
          renderValue={(selected) => selected.join(', ')}
          className="filter-select"
        >
          <MenuItem value="Rear Deltoid">Rear Deltoid</MenuItem>
          <MenuItem value="Kettlebells">Kettlebells</MenuItem>
          <MenuItem value="Dumbbells">Dumbbells</MenuItem>
          <MenuItem value="Resistance Band">Resistance Band</MenuItem>
          <MenuItem value="Tread Mill">Tread Mill</MenuItem>
          <MenuItem value="Pull up Bar">Pull up Bar</MenuItem>
          <MenuItem value="Yoga Mat">Yoga Mat</MenuItem>
          <MenuItem value="Rowing Machine">Rowing Machine</MenuItem>
        </Select>
      </FormControl>



      <FormControl component="fieldset" className="filter-group">
        <FormLabel component="legend">Customer Ratings</FormLabel>
        <Select
          value={selectedRatings}
          onChange={handleRatingsChange}
          className="filter-select"
        >
          <MenuItem value={1}>1 Star & Up</MenuItem>
          <MenuItem value={2}>2 Stars & Up</MenuItem>
          <MenuItem value={3}>3 Stars & Up</MenuItem>
          <MenuItem value={4}>4 Stars & Up</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ProductFilters;