import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({theme}) => theme.color.alto};
  word-break: break-all;

  ${({hidden}) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: ${({theme}) => theme.color.white};
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  transition: background 1s, transform 3s;
  transform-origin: right bottom;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({theme}) => theme.color.forestGreen};

      &:hover {
        filter: brightness(110%);
        transform: scale(1.05);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({theme}) => theme.color.crimson};

      &:hover {
        filter: brightness(120%);
        transform: scale(1.05);
      }
    `}
`;
