import styled, { css } from "styled-components";

const Heading = styled.h1`
  line-height: 1;
  margin: 0;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: var(--fs-h1);
    `};
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: var(--fs-h2);
    `};
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: var(--fs-h3);
    `};
  ${(props) =>
    props.as === "intro" &&
    css`
      font-weight: var(--fs-h3);
      font-size: var(--fs-h1);
    `};
  ${(props) =>
    props.type === "light" &&
    css`
      margin: 0;
      background-color: var(--clr-accent);
      font-family: var(--ff-secondary);
      padding: 0.25em 1em;
      margin-bottom: 1em;
    `}

  & strong {
    display: block;
  }
`;

export default Heading;
