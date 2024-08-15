
import React, { useState } from 'react';
import './SupplementFilters.css';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Typography, Select, MenuItem, FormLabel } from '@mui/material';

const SupplementFilters = ({ onFilterChange }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [selectedDietaryPreferences, setSelectedDietaryPreferences] = useState([]);
  const [selectedForm, setSelectedForm] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');
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

  const handleFlavorChange = (event) => {
    const { value } = event.target;
    setSelectedFlavors(value);
    onFilterChange({ flavors: value });
  };

  const handleDietaryPreferenceChange = (event) => {
    const { value } = event.target;
    setSelectedDietaryPreferences(value);
    onFilterChange({ dietaryPreferences: value });
  };

  const handleFormChange = (event) => {
    const { value } = event.target;
    setSelectedForm(value);
    onFilterChange({ form: value });
  };

  const handleGoalChange = (event) => {
    const { value } = event.target;
    setSelectedGoal(value);
    onFilterChange({ goal: value });
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
          {['0-500', '500-2000', '2000-5000', '5000+'].map(range => (
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
        <FormLabel component="legend">Type</FormLabel>
        <Select
          multiple
          value={selectedTypes}
          onChange={handleTypeChange}
          renderValue={(selected) => selected.join(', ')}
          className="filter-select"
        >
          <MenuItem value="Proteins">Proteins</MenuItem>
          <MenuItem value="Vitamins">Vitamins</MenuItem>
          <MenuItem value="Minerals">Minerals</MenuItem>
          <MenuItem value="Amino Acid">Amino Acid</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset" className="filter-group">
        <FormLabel component="legend">Flavor</FormLabel>
        <Select
          multiple
          value={selectedFlavors}
          onChange={handleFlavorChange}
          renderValue={(selected) => selected.join(', ')}
          className="filter-select"
        >
          <MenuItem value="Chocolate">Chocolate</MenuItem>
          <MenuItem value="Vanilla">Vanilla</MenuItem>
          <MenuItem value="Strawberry">Strawberry</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset" className="filter-group">
        <FormLabel component="legend">Dietary Preferences</FormLabel>
        <Select
          multiple
          value={selectedDietaryPreferences}
          onChange={handleDietaryPreferenceChange}
          renderValue={(selected) => selected.join(', ')}
          className="filter-select"
        >
          <MenuItem value="Vegan">Vegan</MenuItem>
          <MenuItem value="Vegetarian">Vegetarian</MenuItem>
          <MenuItem value="Gluten-Free">Gluten-Free</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset" className="filter-group">
        <FormLabel component="legend">Form</FormLabel>
        <Select
          value={selectedForm}
          onChange={handleFormChange}
          className="filter-select"
        >
          <MenuItem value="Powder">Powder</MenuItem>
          <MenuItem value="Capsule">Capsule</MenuItem>
          <MenuItem value="Tablet">Tablet</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset" className="filter-group">
        <FormLabel component="legend">Goal</FormLabel>
        <Select
          value={selectedGoal}
          onChange={handleGoalChange}
          className="filter-select"
        >
          <MenuItem value="Muscle Gain">Muscle Gain</MenuItem>
          <MenuItem value="Weight Loss">Weight Loss</MenuItem>
          <MenuItem value="Endurance">Endurance</MenuItem>
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

export default SupplementFilters;