import React from 'react'

const Button1 = ({ handleButtonClick, buttonValue, buttonText, isHighlighted }) => {
  return (
    <button
      className={`custom-button ${isHighlighted ? "button-highlighted" : ""}`}
      onClick={handleButtonClick}
      value={buttonValue}
    >
      {buttonText}
    </button>
  )
}

export default Button1