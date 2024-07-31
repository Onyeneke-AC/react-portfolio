import styled, { css } from "styled-components";

const Heading = styled.h1`
  line-height: 1;
  margin: 0 0 0.25em 0;

  ${(props) =>
    props.as === "intro" &&
    css`
      font-weight: var(--fs-h3);
      font-size: var(--fs-h1);
      grid-area: title;
    `};
  ${(props) =>
    props.as === "services" &&
    css`
      color: var(--clr-accent);
      position: relative;
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
    props.as === "h3" &&
    css`
      font-size: var(--fs-h3);
      margin-bottom: 10px;
    `};

  ${(props) =>
    props.as === "work" &&
    css`
      font-size: var(--fs-h2);
      color: var(--clr-light);
      font-weight: var(--fw-bold);

      &::after {
        content: "";
        display: block;
        width: 2em;
        height: 1px;
        margin: 0.5em auto 0.5em;
        background: var(--clr-light);
        opacity: 0.25;
      }
    `}

  & strong {
    display: block;
  }
`;

export default Heading;
