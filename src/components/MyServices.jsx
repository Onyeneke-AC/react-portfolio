import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "../atoms/Heading";

const StyledMyServices = styled.section`
  background-color: var(--clr-dark);
  background-image: url(/img/bgrnd_srv.jpg);
  background-size: cover;
  background-blend-mode: multiply;
  color: var(--clr-light);
  text-align: center;
`;

function MyServices() {
  return (
    <StyledMyServices id="services">
      <Heading as="services">
        <strong>What I do</strong>
      </Heading>
      <div class="services">
        <div class="service">
          <h3>Consultation</h3>
          <p>
            I offer consultation on the best way to go about setting up your
            software prototype.
          </p>
        </div>

        <div class="service">
          <h3>Website Execution</h3>
          <p>
            As a fullstack developer, I carry out the execution of both the
            front end and back end development of website packages.
          </p>
        </div>

        <div class="service">
          <h3>Deployment</h3>
          <p>
            I also offer the best cloud computing solution that will aid the
            deployment of your software.
          </p>
        </div>
      </div>
      <Link to="#work" class="btn">
        My Work
      </Link>
    </StyledMyServices>
  );
}

export default MyServices;
