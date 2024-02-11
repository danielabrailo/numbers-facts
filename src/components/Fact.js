import React from "react";

const Fact = ({ fact }) => {
  console.log(fact);
  return (
    <div className="fact-container">
      <div className="fact-title">Fact!</div>
      {fact && (
        <div className="fact-info">
          <div className="subtitle">Number: {fact.number}</div>
          <div className="fact">{fact.text}</div>
        </div>
      )}
    </div>
  );
};

export default Fact;
