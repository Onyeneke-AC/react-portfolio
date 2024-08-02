import styled from "styled-components";
import Subtitle from "../atoms/Subtitle";
import Heading from "../atoms/Heading";

const StyledAboutMe = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 7em 5em;

  @media (min-width: 600px) {
    padding: 7em 5em;
    display: grid;
    grid-template-columns: 1fr 250px;
    grid-template-areas:
      "title img"
      "subtitle img"
      "text img";
    grid-column-gap: 2em;
  }
`;

const TextDiv = styled.div`
  grid-area: text;
  margin-bottom: 10px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const SeparateDiv = styled.div`
  min-width: 100%;
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const AboutImage = styled.img`
  grid-area: img;
  position: relative;
  z-index: 2;
`;

function AboutMe() {
  return (
    <StyledAboutMe id="About">
      <Heading as="intro-heading">
        <strong>Who I am</strong>
      </Heading>
      <Subtitle type="about-me">Software Engineer</Subtitle>

      <TextDiv>
        <p>
          👋 Hello! I’m Anthony, an enthusiastic and dedicated aspiring software
          engineer. With a solid foundation in front-end development and a
          growing interest in back-end technologies, I’m on a mission to create
          elegant, efficient, and user-friendly solutions.
        </p>
      </TextDiv>

      <AboutImage src="./img/me.jpeg" alt="Anthony Smiling" />

      <SeparateDiv>
        <Heading as="h3">My Journey So Far </Heading>
        <p>
          🌟 <strong>Front-End Development: </strong> Over the past year, I’ve
          immersed myself in the world of front-end development. I’ve crafted
          pixel-perfect websites, optimized user interfaces, and brought designs
          to life using HTML, CSS, JavaScript and React. My experience includes
          responsive design, accessibility, and performance optimization.
        </p>
        <p>
          🚀 <strong>Learning Back-End:</strong> Currently, I’m expanding my
          horizons by diving into back-end technologies. I’m exploring
          databases, server-side scripting, and APIs. My curiosity drives me to
          understand how the entire tech stack fits together, from client to
          server.
        </p>
        <Heading as="h3">What Sets Me Apart </Heading>
        <p>
          🔍<strong>Problem Solver:</strong> I thrive on dissecting complex
          problems and finding elegant solutions. Whether it’s debugging a
          tricky CSS issue or architecting a scalable application, I approach
          challenges with determination and creativity.
        </p>
        <p>
          🌐 <strong>User-Centric Mindset:</strong> I believe that great
          software starts with empathy for users. I’m passionate about creating
          seamless experiences that delight and empower people.
        </p>
        <p>
          📚 <strong>Continuous Learner:</strong> Learning is my superpower! I
          stay up-to-date with industry trends and attend webinars. Lifelong
          learning is at the core of my journey.
        </p>
      </SeparateDiv>
    </StyledAboutMe>
  );
}

export default AboutMe;
