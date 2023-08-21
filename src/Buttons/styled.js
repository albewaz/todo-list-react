import styled from "styled-components";

export const Button = styled.button`
  color: teal;
  background: none;
  border: none;
  transition: 0.5s;
  padding: 20px;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
  }
  
  &:hover {
    color: hsl(180, 95%, 41%);
    cursor: pointer;
  }

  &:active {
    color: #ccc;
  }
`;
