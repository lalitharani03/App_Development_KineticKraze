import React from "react";
import { useParams } from "react-router-dom";
import './WorkoutDetail.css';  


const WorkoutDetail = ({ workouts }) => {
  const { title } = useParams();
  const workout = workouts.find((workout) => workout.title === title);

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <div className="workout-detail">
      <h1 className="workout-title">{workout.title}</h1>
      <img src={workout.img} alt={workout.title} className="workout-image" />
      <div className="instructions">
        {/* <h1>Step by Step Instructions</h1> */}
        <h2>The Right Way to do {workout.title}</h2>
        <p>{workout.instructions}</p>
        <ol>
          <li>{workout.step1}</li>
          <li>{workout.step2}</li>
          <li>{workout.step3}</li>
          <li>{workout.step4}</li>
        </ol>
        <h4 className="result">{workout.result}</h4>
      </div>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src={`https://www.youtube.com/embed/${workout.video}`} 
          title={workout.title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WorkoutDetail;