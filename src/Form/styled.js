import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({theme}) => theme.color.alto};
  min-width: 100%;
`;

export const Button = styled.button`
  padding: 10px;
  background: ${({theme}) => theme.color.teal};
  color: ${({theme}) => theme.color.white};
  border: none;
  transition: background 1s, transform 1s;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.05);
  }

  &:active {
    filter: brightness(120%);
  }

  @media (max-width: 767px) {
    min-height: 30px;
  }
`;
