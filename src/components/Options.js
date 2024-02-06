import React from "react";

const Options = ({ setOption }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  };

  return (
    <div>
      <div>
        <ul className="options-container">
          <li className="option selected" value="1" onClick={handleClick}>
            Random
          </li>
          <li className="option" value="2" onClick={handleClick}>
            Math
          </li>
          <li className="option" value="3" onClick={handleClick}>
            Date
          </li>
          <li className="option" value="4" onClick={handleClick}>
            Trivia
          </li>
          <li className="option" value="5" onClick={handleClick}>
            Year
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Options;
