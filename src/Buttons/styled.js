import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  color: ${({theme}) => theme.color.teal};
  background: none;
  border: none;
  transition: 0.5s;
  padding: 20px;

  @media (max-width:${({theme}) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
  }
  
  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;