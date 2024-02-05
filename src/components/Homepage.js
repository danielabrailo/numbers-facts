import React, { useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useEffect } from "react";
import Options from "./Options";
import Button from "./Button";
import Fact from "./Fact";
import Input from "./Input";
import DateInput from "./DateInput";

const Homepage = () => {
  const [fact, setFact] = useState({});
  const [option, setOption] = useState("1");
  const [number, setNumber] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();

  const [isLoading, setIsLoading] = useState(false);

  //   useEffect(() => {
  //     fetchFromAPI("random/trivia").then((data) => {
  //       setFact(data);
  //       setIsLoading(false);
  //     });
  //   }, []);

  const fetchNewFact = () => {
    console.log("number: " + number);

    fetchFromAPI(
      option === 1
        ? "random/trivia"
        : option === 2
        ? `${number}/math`
        : option === 3
        ? `${month}/${day}/date`
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
      <Options setOption={setOption} />
      {option === 2 && <Input setNumber={setNumber} />}
      {option === 3 && <DateInput setDay={setDay} setMonth={setMonth} />}
      <Button setIsLoading={setIsLoading} fetchNewFact={fetchNewFact} />
      <Fact fact={fact} />
    </div>
  );
};

export default Homepage;
