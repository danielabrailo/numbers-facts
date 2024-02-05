import React from "react";

const Button = ({ setIsLoading, fetchNewFact }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // setIsLoading(true);
    fetchNewFact();
  };

  return (
    <div>
      <div className="get-fact-button" onClick={handleClick}>
        Get a new fact!
      </div>
    </div>
  );
};

export default Button;
