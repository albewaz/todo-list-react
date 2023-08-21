import { Segment, Header, Body, HeaderSection } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Segment>
        <HeaderSection>
          <Header>{title}</Header>
          {extraHeaderContent}
        </HeaderSection>
      <Body>
        {body}
      </Body>
    </Segment>
);

export default Section; 