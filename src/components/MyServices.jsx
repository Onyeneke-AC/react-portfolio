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

  @media (min-width: 600px) {
    padding: 7em 5em 5em;
  }
`;

const Services = styled.div`
  margin-bottom: 3em;

  @media (min-width: 800px) {
    display: flex;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Service = styled.div`
  max-width: 500px;
  margin: 0 auto 20px;
  padding: 15px;

  & p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    padding-top: 10px;
  }
`;

function MyServices() {
  return (
    <StyledMyServices id="Services">
      <Heading as="service-heading">
        <strong>What I do</strong>
      </Heading>
      <Services>
        <Service>
          <Heading as="h3">Website Development and Design</Heading>
          <p>
            Create custom websites for clients, focusing on user-friendly
            interfaces, responsive design, and optimal performance. Use React to
            build visually appealing and functional websites. Collaborate with
            clients to understand their needs, brand identity, and target
            audience.
          </p>
        </Service>

        <Service>
          <Heading as="h3">Front-End Optimization</Heading>
          <p>
            Optimize existing websites by improving page load times, enhancing
            user experience, and ensuring compatibility across browsers and
            devices. Implement performance best practices, minify assets, and
            optimize images. Conduct audits to identify bottlenecks and
            recommend improvements.
          </p>
        </Service>

        <Service>
          <Heading as="h3">Component Libraries and UI Kits</Heading>
          <p>
            Develop reusable UI components, libraries, or kits that other
            developers can use to build consistent and efficient user
            interfaces. Create well-documented components (e.g., buttons, forms,
            modals) using React. Publish them on platforms like GitHub.
          </p>
        </Service>
      </Services>
      <ButtonLink to="#Work">My Work</ButtonLink>
    </StyledMyServices>
  );
}

export default MyServices;
