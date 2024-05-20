import styled, { css } from "styled-components";

const Heading = styled.h1`
  line-height: 1;
  margin: 0;

  ${(props) =>
    props.as === "intro" &&
    css`
      font-weight: var(--fs-h3);
      font-size: var(--fs-h1);
    `};
  ${(props) =>
    props.as === "services" &&
    css`
      color: var(--clr-accent);
      position: relative;
      margin-bottom: 0.25em;
      font-size: var(--fs-h2);

      &::after {
        content: "";
        display: block;
        width: 2em;
        height: 1px;
        margin: 0.5em auto 1em;
        background: var(--clr-light);
        opacity: 0.25;
      }
    `};
  ${(props) =>
    props.type === "light" &&
    css`
      margin: 0;
      background-color: var(--clr-accent);
      padding: 0.25em 1em;
      margin-bottom: 1em;
    `}

  & strong {
    display: block;
  }
`;

export default Heading;
