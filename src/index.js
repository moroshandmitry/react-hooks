import { StrictMode } from "react";
import { render } from "react-dom";

import { App } from "./App";

const elApp = document.getElementById("root");

render(
  <StrictMode>
    <App />
  </StrictMode>,
  elApp
);
