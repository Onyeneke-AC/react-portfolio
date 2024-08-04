import { Link } from "react-router-dom";
import { portfolioData } from "../assets/data";
import Work from "./Work";
import styled from "styled-components";
import Heading from "../atoms/Heading";

const WorkSection = styled.section`
  background-color: var(--clr-dark);
  color: var(--clr-light);
  text-align: center;
  padding: 50px 30px;
`;

const WorkSubtitle = styled.p`
  color: var(--clr-accent);
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-top: 10px;
  line-height: 1rem;
  font-size: 20px;
`;

const Portfolio = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(inherit, 1fr));
  gap: 25px;
  padding: 50px 0;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

const PortfolioItem = styled(Link)`
  background: var(--clr-accent);
  overflow: hidden;
  width: 100%;

  &:focus {
    position: relative;
    z-index: 2;
  }
`;

function MyWork() {
  return (
    <WorkSection id="Work">
      <Heading as="my-work">My Work</Heading>
      <WorkSubtitle>
        Over one year experience working with front-end technologies.
      </WorkSubtitle>
      <Portfolio>
        {portfolioData.map((work) => (
          <PortfolioItem to={`/project/${work.id}`} key={work.id}>
            <Work work={work} />
          </PortfolioItem>
        ))}
      </Portfolio>
    </WorkSection>
  );
}

export default MyWork;
