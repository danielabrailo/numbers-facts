import React from "react";
import Options from "./Options";

const Homepage = () => {
  return (
    <div>
      <h1 className="title">Get Facts!</h1>
      <h3 className="explanation">
        Get facts on the option you choose from below!
      </h3>
      <Options />
    </div>
  );
};

export default Homepage;
