import React from "react";

const Input = ({ setDay, setMonth }) => {
  return (
    <div className="input-container">
      <label className="label">Select a Day</label>
      <input
        type="number"
        min="1"
        max="30"
        className="number-input"
        onChange={(e) => setDay(e.target.value)}
      />
      <label className="label">Select a Month</label>
      <input
        type="number"
        min="1"
        max="12"
        className="number-input"
        onChange={(e) => setMonth(e.target.value)}
      />
    </div>
  );
};

export default Input;
