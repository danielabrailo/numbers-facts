import React, { useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useEffect } from "react";
import Options from "./Options";
import Button from "./Button";
import Fact from "./Fact";

const Homepage = () => {
  const [fact, setFact] = useState({});

  useEffect(() => {
    fetchFromAPI("random/trivia").then((data) => setFact(data));
  }, []);

  return (
    <div>
      <h1 className="title">Get Facts!</h1>
      <h3 className="explanation">
        Get facts on the option you choose from below!
      </h3>
      <Options />
      <Button />
      <Fact fact={fact} />
    </div>
  );
};

export default Homepage;
