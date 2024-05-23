import styled from "styled-components";
import Heading from "../atoms/Heading";
import Subtitle from "../atoms/Subtitle";

const StyledIntroduction = styled.section`
  position: relative;
  padding: 1000px auto;

  @media (min-width: 600px) {
    display: grid;
    width: min-content;
    margin: 0 auto;
    grid-column-gap: 1em;
    grid-template-areas:
      "img title"
      "img subtitle";
    grid-template-columns: min-content max-content;
  }
`;

const IntroImage = styled.img`
  box-shadow: var(--bs);

  @media (min-width: 600px) {
    grid-area: img;
    min-width: 250px;
    position: relative;
    z-index: 2;
  }
`;

function Introduction() {
  return (
    <StyledIntroduction id="home">
      <Heading as="intro">
        Hi, I am <strong>Onyeneke Anthony</strong>
      </Heading>
      <Subtitle type="intro">Front-end Developer</Subtitle>
      <IntroImage src="./img/me.jpeg" alt="Anthony smiling" />
    </StyledIntroduction>
  );
}

export default Introduction;
