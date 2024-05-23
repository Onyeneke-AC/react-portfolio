import styled from "styled-components";
import Subtitle from "../atoms/Subtitle";
import Heading from "../atoms/Heading";

const StyledAboutMe = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 10em 5em;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 250px;
    grid-template-areas:
      "title img"
      "subtitle img"
      "text img";
    grid-column-gap: 2em;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const AboutImage = styled.img`
  grid-area: img;
  position: relative;
  z-index: 2;
`;

function AboutMe() {
  return (
    <StyledAboutMe id="about">
      <Heading as="intro">
        <strong>Who I am</strong>
      </Heading>
      <Subtitle type="about">Software Engineer</Subtitle>

      <div>
        <p>
          I am an aspiring software engineer who takes his time to work on his
          foundations before embracing any technology.
        </p>
        <p>
          I have experience with C which I applied in embedded systems, R which
          I applied in data science, python which I applied in computer vision
          and javascript which I currently use for my front-end. I am also
          interested in diving into a career in line with cloud computation or
          backend development.
        </p>
      </div>

      <AboutImage src="./img/me.jpeg" alt="Anthony Smiling" />
    </StyledAboutMe>
  );
}

export default AboutMe;
