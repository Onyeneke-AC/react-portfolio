import { Link } from "react-router-dom";
import { portfolioData } from "../assets/data";
import Work from "./Work";
import styled from "styled-components";
import Heading from "../atoms/Heading";

const WorkSection = styled.section`
  background-color: var(--clr-dark);
  color: var(--clr-light);
  text-align: center;
  padding: 50px 0;
`;

const WorkSubtitle = styled.p`
  color: var(--clr-accent);
  /* font-weight: var(--fw-bold); */
  font-family: var(--ff-primary);
  margin-top: 10px;
  line-height: 1rem;
  font-size: 20px;
`;

const Portfolio = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  padding: 50px;
`;

const PortfolioItem = styled(Link)`
  background: var(--clr-accent);
  overflow: hidden;

  &:focus {
    position: relative;
    z-index: 2;
  }
`;

function MyWork() {
  return (
    <WorkSection id="Work">
      <Heading as="work">My Work</Heading>
      <WorkSubtitle>
        Over one year experience working with front-end technologies.
      </WorkSubtitle>
      <Portfolio>
        {portfolioData.map((work) => (
          <PortfolioItem to={`/project/${work.id}`} key={work.id}>
            <Work work={work} key={work.id} />
          </PortfolioItem>
        ))}
      </Portfolio>
    </WorkSection>
  );
}

export default MyWork;
