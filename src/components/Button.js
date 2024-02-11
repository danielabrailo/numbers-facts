import React from "react";

const Button = ({ setIsLoading, fetchNewFact, number, option }) => {
  const handleClick = (e) => {
    if (option != 1 && !number) return;

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
