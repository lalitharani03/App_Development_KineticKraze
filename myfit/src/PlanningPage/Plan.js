
import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import BMICalculator from "./BMICalc";
import "../PlanningPage/Plan.css";
import Myworkout from "./Myworkout";
import DietPlan from "./DietPlan";
import Left from "../Profile/Left";

export default function Plan() {
  const { userId } = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const navigate = useNavigate();

  const height = parseFloat(params.get("height")) || 0;
  const weight = parseFloat(params.get("weight")) || 0;
  const fname = params.get("fname") || "User";
  console.log("Plan page params:", { userId, height, weight, fname });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div style={{ marginLeft: isSidebarOpen ? "250px" : "0", transition: "margin-left 0.3s ease" }}>
      <Left userId={userId} height={height} weight={weight} fname={fname} onSidebarToggle={handleSidebarToggle} />
      <div style={{ display: "flex", marginTop: "1cm" ,marginLeft: "3cm" }}>
        <h1 className="gupter-bold">Hiii {fname} !!!</h1>
        <div>
          <Myworkout />
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <BMICalculator height={height} weight={weight} />
      </div>
      <div className="diet-plan">
        <DietPlan />
      </div>
      <div className="button-container">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
}
