import React from 'react';

const GymCard = ({ gym }) => {
  return (
    <div className="gym-card">
      <h3 style={{fontSize:'20px',fontWeight:'bold'}}>{gym.name}</h3>
      <p>{gym.address}</p>
      <p>Distance: {gym.distance} km</p>
    </div>
  );
};

export default GymCard;
