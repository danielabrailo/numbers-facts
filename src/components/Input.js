import React from "react";

const Input = ({ setNumber }) => {
  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="input-container">
      <label className="number-label">
        Write a number:
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

export default Input;
