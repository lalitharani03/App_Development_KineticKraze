import React, { useState, useEffect } from 'react';
import './BMICalc.css';

export default function BMICalculator({ height, weight }) {
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setMessage('You are underweight. 🥲');
      else if (bmiValue < 24.9) setMessage('You have a normal weight. 🙌');
      else if (bmiValue < 29.9) setMessage('You are overweight. 🤨');
      else setMessage('You are obese. 😯');
    } else {
      setMessage('Please enter valid height and weight.');
    }
  }, [height, weight]);

  return (
    <>
    <div className="bmi-calculator" style={{marginLeft:'2cm'}}>
      <div className="bmi-box" style={{width:'13cm',height:'4.5rem'}}>
        {bmi && <h2 className='gupter-regular' style={{color:'white'}}>Your BMI: {bmi}</h2>}
      </div>
      <div className="message-box" style={{width:'13cm',height:'4.5rem',marginLeft:'1cm'}}>
        <h2 className='gupter-regular' style={{color:'white'}}>{message} </h2>
      </div>
    </div>
    </>
  );
}
