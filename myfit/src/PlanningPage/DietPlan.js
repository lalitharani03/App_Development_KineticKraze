import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DietPlan() {
  const { userId } = useParams();
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [dietPlan, setDietPlan] = useState({});

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:8080/api/v1/details/${userId}`)
        .then((response) => {
          const goal = response.data.fitnessGoals;
          setFitnessGoal(goal);
          return axios.get(
            `http://localhost:8082/api/v1/dietplan/${encodeURIComponent(goal)}`
          );
        })
        .then((response) => {
          setDietPlan(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the diet plan!", error);
        });
    }
  }, [userId]);

  return (
    <>
       <h2
        style={{
          fontFamily: "Gupiter",
          fontSize: "35px",
          fontWeight: "bold",
          marginLeft: "2cm",
          marginRight: "auto",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Your Diet Plan
      </h2>
      <div className="diet-plan" style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginLeft:'2cm'
      }}>
        {Object.keys(dietPlan).map((day, index) => (
          <div key={index} style={{
            padding: "15px",
            margin: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "",
            width: "250px",
            boxShadow: "0 4px 5px gray",
          }}>
            <h3 style={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
              marginBottom: "10px",
            }}>{day}</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {dietPlan[day].map((meal, idx) => (
                <li key={idx} style={{
                  marginBottom: "8px",
                  fontSize: "16px",
                  lineHeight: "1.5",
                }}>
                  <strong>{meal.split(":")[0]}:</strong> {meal.split(":")[1]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}