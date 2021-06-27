import React, { useState, useEffect } from "react";

import { Counter } from "./Counter/Counter";

import { StyledBtn } from "../styled/StyledBtn";
import { StyledToggleCounter } from "./styled/StyledToggleCounter";

export const ToggleCounter = () => {
  const [showCounter, setShowCounter] = useState(true);

  const handleToggleCounter = () => setShowCounter(!showCounter);

  // componentDidMount() && componentWillUnmount()
  useEffect(() => {
    console.log("Toggle Button");
    return () => {
      if (showCounter) return console.log("<Counter> is going to be remove");
      return console.log("<Counter> will be rendered");
    };
  });

  // componentDidUpdate() => Cleanup function
  // useEffect(() => {
  //   console.log("After update showCounter");

  //   // 2. Cleanup function will be called before
  //   // 3. console.log("<ToggleCounter> Button");
  //   // 1. after update showCounter
  //   return () => {
  //     console.log("showCounter => Cleanup function", true);
  //   };
  // }, [showCounter]);

  return (
    <StyledToggleCounter>
      <StyledBtn type="button" onClick={handleToggleCounter}>
        {showCounter ? "Hide" : "Show"} counter
      </StyledBtn>
      {showCounter && <Counter />}
    </StyledToggleCounter>
  );
};
