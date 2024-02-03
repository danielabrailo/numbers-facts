import React from "react";
import Options from "./Options";
import Button from "./Button";

const Homepage = () => {
  return (
    <div>
      <h1 className="title">Get Facts!</h1>
      <h3 className="explanation">
        Get facts on the option you choose from below!
      </h3>
      <Options />
      <Button />
    </div>
  );
};

export default Homepage;
