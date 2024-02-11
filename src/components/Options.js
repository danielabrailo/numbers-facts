const Options = ({ option, setOption, setFact, setNumber }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setFact({});
    setNumber();
    setOption(e.target.value);
  };

  return (
    <div>
      <div>
        <ul className="options-container">
          <li
            className={`option ${option === 1 ? "selected" : ""}`}
            value="1"
            onClick={handleClick}
          >
            Random
          </li>
          <li
            className={`option ${option === 2 ? "selected" : ""}`}
            value="2"
            onClick={handleClick}
          >
            Math
          </li>
          <li
            className={`option ${option === 3 ? "selected" : ""}`}
            value="3"
            onClick={handleClick}
          >
            Date
          </li>
          <li
            className={`option ${option === 4 ? "selected" : ""}`}
            value="4"
            onClick={handleClick}
          >
            Trivia
          </li>
          <li
            className={`option ${option === 5 ? "selected" : ""}`}
            value="5"
            onClick={handleClick}
          >
            Year
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Options;
