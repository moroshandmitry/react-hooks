import React, { useState, useEffect } from "react";

import { StyledUser } from "./styled/StyledUser";
import { StyledUserInput } from "./styled/StyledUserInput";
import { StyledUserLabel } from "./styled/StyledUserLabel";

export const User = ({ hello }) => {
  const [userName, setUserName] = useState("");

  const handleChangeInput = ({ target }) => setUserName(target.value);

  // componentDidUpdate()
  useEffect(() => {
    console.log("<User /> userName is updated", userName);
  }, [userName]);

  return (
    <StyledUser>
      <StyledUserLabel htmlFor="userInput">Focus on input</StyledUserLabel>
      <StyledUserInput
        id="userInput"
        type="text"
        value={userName}
        placeholder="Enter your name"
        onChange={handleChangeInput}
      />
      <div>
        {userName && (
          <p>
            Props - {hello} <span>{userName}</span>!
          </p>
        )}
      </div>
    </StyledUser>
  );
};
