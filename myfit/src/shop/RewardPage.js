import React, { useState, useEffect } from 'react';
import './RewardPage.css';

const RewardPage = ({handleRedeem}) => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchRewards = async () => {
      const data = [
        { id: 1, name: 'Discount Coupon', points: 100 },
        { id: 2, name: 'Free Shipping', points: 200 },
        { id: 3, name: 'Gift Card', points: 300 },
      ];
      setRewards(data);
    };

    fetchRewards();
  }, []);

  return (
    <div className="reward-page">
      <h2 style={{fontWeight:'bold'}}>Rewards</h2>
      <div className="rewards-list">
        {rewards.map(reward => (
          <div key={reward.id} className="reward-card">
            <h4 style={{fontWeight:'bold'}}>{reward.name}</h4>
            <p>Points Required: {reward.points}</p>
            <button onClick={handleRedeem}>Redeem</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardPage;