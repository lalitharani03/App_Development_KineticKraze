import React from 'react';
import GymCard from './GymCard';

const GymList = ({ gyms }) => {
  return (
    <div className="gym-list">
      {gyms.map((gym, index) => (
        <GymCard key={index} gym={gym} />
      ))}
    </div>
  );
};

export default GymList;
