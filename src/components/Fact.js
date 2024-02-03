import React from "react";

const Fact = ({ fact }) => {
  console.log(fact);
  return (
    <div className="fact-container">
      <div className="fact-title">Fact!</div>
      <div className="subtitle">Number: {fact.number}</div>
      <div className="fact">{fact.text}</div>
    </div>
  );
};

export default Fact;
