import React from 'react'

const Input1 = ({ handleRadioChange, inputValue, inputLabel, inputName }) => {
  return (
    <label className="radio-label-container">
      <input onChange={handleRadioChange} type="radio" value={inputValue} name={inputName} />
      <span className="custom-checkmark"></span>
      {inputLabel}
    </label> 
  )
}

export default Input1