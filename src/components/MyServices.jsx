import styled from "styled-components";
import Heading from "../atoms/Heading";
import ButtonLink from "../atoms/Button";

const StyledMyServices = styled.section`
  background-color: var(--clr-dark);
  background-image: url(/img/bgrnd_srv.jpg);
  background-size: cover;
  background-blend-mode: multiply;
  color: var(--clr-light);
  text-align: center;
  padding: 7em 5em;
`;

const Services = styled.div`
  margin-bottom: 4em;

  @media (min-width: 800px) {
    display: flex;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  & div {
    max-width: 500px;
    margin: 0 auto 20px;
  }
`;

function MyServices() {
  return (
    <StyledMyServices id="services">
      <Heading as="services">
        <strong>What I do</strong>
      </Heading>
      <Services>
        <div>
          <Heading as="h3">Consultation</Heading>
          <p>
            I offer consultation on the best way to go about setting up your
            software prototype.
          </p>
        </div>

        <div>
          <Heading as="h3">Website Execution</Heading>
          <p>
            As a fullstack developer, I carry out the execution of both the
            front end and back end development of website packages.
          </p>
        </div>

        <div>
          <Heading as="h3">Deployment</Heading>
          <p>
            I also offer the best cloud computing solution that will aid the
            deployment of your software.
          </p>
        </div>
      </Services>
      <ButtonLink to="#work">My Work</ButtonLink>
    </StyledMyServices>
  );
}

export default MyServices;
