import React from "react";

const Year = ({ setNumber }) => {
  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="input-container">
      <label className="number-label">
        Write a year:
        <input
          type="text"
          name="number"
          className="number-input"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Year;
