import styled from "styled-components";
import Heading from "../atoms/Heading";

const StyledIntroduction = styled.section`
  position: relative;

  & p {
    margin: 0;
    font-size: var(--fs-h3);
    background: var(--clr-accent);
    font-family: var(--ff-secondary);
    padding: 0.25em 1em;
    margin-bottom: 1em;
    display: inline-block;

    @media (min-width: 600px) {
      align-self: start;
      grid-column: -1/1;
      grid-row: 2;
      text-align: right;
      position: relative;
      left: -1.5rem;
      width: calc(100% + 1em);
    }
  }

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
      <p>Front-end Developer</p>
      <IntroImage src="./img/me.jpeg" alt="Anthony smiling" />
    </StyledIntroduction>
  );
}

export default Introduction;
