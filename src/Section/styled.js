import styled from "styled-components";

export const Segment = styled.section`
  margin: 10px 0;
  min-width: 100px;
  background: white;
  box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.h2`
    font-size: 20px;
    padding: 20px;
    margin: 0;
`;

export const Body = styled.div`
padding: 20px;
`;

export const HeaderSection = styled.div`
display: grid;
grid-template-columns: 1fr auto;
border-bottom: 1px solid #ddd;

@media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;



