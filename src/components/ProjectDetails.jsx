import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { portfolioData } from "../assets/data";
import styled from "styled-components";
import Heading from "../atoms/Heading";
import Subtitle from "../atoms/Subtitle";
import Footer from "./Footer";
import { HiArrowLeft } from "react-icons/hi";

const Intro = styled.section`
  position: relative;
  padding: 50px 30px 20px;

  @media (min-width: 600px) {
    display: grid;
    width: min-content;
    padding-top: 100px;
    margin: 0 auto;
    grid-column-gap: 1em;
    grid-template-areas:
      "img title"
      "img subtitle";
    grid-template-columns: min-content max-content;
  }
`;

const StyledPortfolioItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 30px;

  & p {
    width: 100%;
    font-size: 1.2rem;
    text-align: justify;
  }

  @media (min-width: 700px) {
    padding: 30px 100px;
  }
`;

const ProjectImg = styled.div`
  & img {
    box-shadow: var(--bs);
    object-fit: fill;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 600px) {
    max-height: 190px;
    grid-area: img;
    min-width: 350px;
    max-width: 500px;
    position: relative;
    z-index: 2;
  }
`;

const ProjectSubImg = styled.div`
  margin: 10px;

  & img {
    box-shadow: var(--bs);
    object-fit: fill;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 600px) {
    height: 300px;
    max-width: 600px;
    position: relative;
    z-index: 2;
  }
`;

const StyledLinks = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const BackLink = styled.button`
  margin-top: 25px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  background: none;
  align-items: center;
  font-size: 1rem;
  border: none;

  &:hover {
    color: var(--clr-accent);
    text-decoration: underline;
    cursor: pointer;
  }
`;

function ProjectDetails() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const projectID = parseInt(projectId);

  const portfolio = portfolioData || [];

  const project = portfolio?.find((data) => {
    return projectID === data.id;
  });

  return (
    <>
      <BackLink onClick={() => navigate(-1)}>
        <HiArrowLeft />
        Back to Home
      </BackLink>
      <Intro>
        <Heading as="intro">
          <strong>{project.title}</strong>
        </Heading>
        <Subtitle type="intro">{project.subtitle}</Subtitle>
        <ProjectImg>
          <img src={`/${project.mainImg}`} alt={project.title} />
        </ProjectImg>
      </Intro>

      <StyledPortfolioItem>
        <p>
          <strong>Stack used: {project.stack}</strong>
        </p>
        <ProjectSubImg>
          <img src={`/${project.subImg}`} alt={project.title} />
        </ProjectSubImg>

        <p>{project.description}</p>
        <StyledLinks>
          <div>
            Click{" "}
            <Link to={project.demo} target="__blank">
              {project.title}
            </Link>{" "}
            to view the project
          </div>
          <div>
            Github:{" "}
            <Link to={project.github} target="__blank">
              Github
            </Link>
          </div>
        </StyledLinks>
      </StyledPortfolioItem>
      <Footer />
    </>
  );
}

export default ProjectDetails;
