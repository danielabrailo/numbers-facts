import React from "react";

const Fact = ({ fact, option }) => {
  return (
    <div className="fact-container">
      <div className="fact-title">Fact!</div>
      {fact && (
        <div className="fact-info">
          <div className="subtitle">
            {option === 3 && fact.year
              ? `Year: ${fact.year}`
              : fact.number
              ? `Number: ${fact.number}`
              : ""}
          </div>
          <div className="fact">{fact.text}</div>
        </div>
      )}
    </div>
  );
};

export default Fact;
