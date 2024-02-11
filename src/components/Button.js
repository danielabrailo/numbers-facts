import React from "react";

const Button = ({ setIsLoading, fetchNewFact, number, option, setFact }) => {
  const handleClick = (e) => {
    const optionsThatNeedNumber = option === 2 || option === 4 || option === 5;
    if (optionsThatNeedNumber && !number) return;

    setFact({});
    e.preventDefault();
    setIsLoading(true);
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
