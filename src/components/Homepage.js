import React, { useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Options from "./Options";
import Button from "./Button";
import Fact from "./Fact";
import Input from "./Input";
import Year from "./Year";
import DateInput from "./DateInput";
import Spinner from "./Spinner";

const Homepage = () => {
  const [fact, setFact] = useState({});
  const [option, setOption] = useState("1");
  const [number, setNumber] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const fetchNewFact = () => {
    fetchFromAPI(
      option === 1
        ? "random/trivia"
        : option === 2
        ? `${number}/math`
        : option === 3
        ? `${month}/${day}/date`
        : option === 4
        ? `${number}/trivia`
        : option === 5
        ? `${number}/year`
        : ""
    ).then((data) => {
      setFact(data);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <h1 className="title">Get Facts!</h1>
      <h3 className="explanation">
        Get facts on the option you choose from below!
      </h3>
      <Options
        option={option}
        setOption={setOption}
        setFact={setFact}
        setNumber={setNumber}
      />
      {(option === 2 || option === 4) && <Input setNumber={setNumber} />}
      {option === 3 && <DateInput setDay={setDay} setMonth={setMonth} />}
      {option === 5 && <Year setNumber={setNumber} />}
      <Button
        setIsLoading={setIsLoading}
        fetchNewFact={fetchNewFact}
        number={number}
        option={option}
        setFact={setFact}
      />
      <Fact fact={fact} option={option} />
      {isLoading && <Spinner />}
    </div>
  );
};

export default Homepage;
