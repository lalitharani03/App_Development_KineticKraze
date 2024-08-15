import React from "react";
import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All" />
        <Button onClickHandler={handleClick} value="Yoga" title="Yoga" />
        <Button onClickHandler={handleClick} value="Cardio" title="Cardio" />
      </div>
    </div>
  );
};

export default Recommended;