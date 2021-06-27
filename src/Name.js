import React, { useContext, useRef } from "react";

import { Context } from "./Context";

export const Name = ({ children }) => {
  const { handleChangeName } = useContext(Context);

  const inputRef = useRef();
  const handleFocusInput = () => inputRef.current.focus();

  const styled = {
    p: {
      color: "rgba(30, 100, 255, 0.6)",
      fontWeight: "bold",
      fontSize: "1.1em"
    },
    label: {
      color: "rgba(30, 100, 255, 0.6)",
      fontWeight: "bold",
      fontSize: "1.1em",
      cursor: "pointer"
    },
    input: {
      padding: "10px",
      borderRadius: "4px",
      border: "3px solid rgba(30, 100, 255, 0.6)",
      color: "rgba(30, 100, 255, 1)",
      fontWeight: "bold",
      fontSize: "1.1em",
      marginLeft: "7px",
      outline: 0
    }
  };

  return (
    <div>
      <p style={styled.p}>
        <strong>Context</strong> {children}
      </p>
      <label style={styled.label} onClick={() => handleFocusInput()}>
        Focus on input
      </label>
      <input
        ref={inputRef}
        placeholder="Enter your context"
        style={styled.input}
        type="text"
        onChange={handleChangeName}
      />
    </div>
  );
};
