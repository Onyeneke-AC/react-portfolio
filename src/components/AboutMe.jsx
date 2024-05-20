import styled from "styled-components";
import Subtitle from "../atoms/Subtitle";

const StyledAboutMe = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 250px;
    grid-template-areas:
      "title img"
      "subtitle img"
      "text img";
    grid-column-gap: 2em;
  }
`;

function AboutMe() {
  return (
    <StyledAboutMe id="about">
      <h2 class="section__title section__title--about">Who I am</h2>
      <Subtitle type="about">Software Engineer</Subtitle>

      <div class="about-me__body">
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

      <img src="./img/me.jpeg" alt="Anthony Smiling" class="about-me__img" />
    </StyledAboutMe>
  );
}

export default AboutMe;
