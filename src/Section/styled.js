import styled from "styled-components";

export const Segment = styled.section`
  margin: 10px 0;
  min-width: 100px;
  background: ${({theme}) => theme.color.white};
  box-shadow: 0 0 5px ${({theme}) => theme.color.alto};
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
border-bottom: 1px solid ${({theme}) => theme.color.alto};

@media (max-width:${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;



