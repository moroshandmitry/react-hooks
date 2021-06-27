import { useState } from "react";

import { ToggleCounter } from "./components/ToggleCounter/ToggleCounter";
import { User } from "./components/User/User";

import { StyledApp } from "./StyledApp";

import { Context } from "./Context";
import { Name } from "./Name";

export const App = () => {
  const [name, setName] = useState("");

  const handleChangeName = ({ target }) => setName(target.value);

  return (
    <Context.Provider value={{ handleChangeName }}>
      <StyledApp>
        <ToggleCounter />
        <Name>{name}</Name>
        <User hello="This Hello in props -" />
      </StyledApp>
    </Context.Provider>
  );
};
