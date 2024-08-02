import styled from "styled-components";
import Heading from "../atoms/Heading";
import Subtitle from "../atoms/Subtitle";

const StyledIntroduction = styled.section`
  position: relative;
  padding: 7em 5em;
  object-fit: cover;

  @media (min-width: 600px) {
    display: grid;
    width: min-content;
    padding: 12em 5em;
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
    <StyledIntroduction id="Home">
      <Heading as="intro-heading">
        Hi, I am <strong>Onyeneke Anthony</strong>
      </Heading>
      <Subtitle type="intro-sub">Front-end Developer</Subtitle>
      <IntroImage src="./img/me.jpeg" alt="Anthony smiling" />
    </StyledIntroduction>
  );
}

export default Introduction;
