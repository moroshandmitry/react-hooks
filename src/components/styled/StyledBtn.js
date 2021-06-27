import styled from "styled-components";

export const StyledBtn = styled.button`
  background: rgba(30, 140, 255, 1);
  color: #fff;
  padding: 5px;
  width: 180px;
  font-size: 1.1em;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;

  &:hover {
    background: rgba(30, 140, 255, 0.8);
  }

  &:disabled {
    background: rgba(30, 140, 255, 0.6);
  }
`;
