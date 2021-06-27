import React, { useState, useEffect } from "react";

import { StyledBtn } from "../../styled/StyledBtn";
import { StyledCounter } from "./styled/StyledCounter";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = (value) => setCount((prevCount) => prevCount + value);
  const handleDecrement = (value) => {
    setCount((prevCount) => {
      if (prevCount <= 0) return prevCount;
      return prevCount - value;
    });
  };

  // componentDidMount()
  useEffect(() => {
    console.log("<Counter /> current counter is", count);
  });

  return (
    <StyledCounter>
      <StyledBtn type="button" onClick={() => handleIncrement(1)}>
        Add 1 to card!
      </StyledBtn>
      {` ${count} `}
      <StyledBtn
        type="button"
        onClick={() => handleDecrement(1)}
        disabled={count === 0 && true}
      >
        {count === 0 ? "Selected 0" : "Remove from cart!"}
      </StyledBtn>
    </StyledCounter>
  );
};
