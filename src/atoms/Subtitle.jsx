import styled, { css } from "styled-components";

const Subtitle = styled.p`
  margin: 0;
  font-size: var(--fs-h3);
  background: var(--clr-accent);
  font-family: var(--ff-secondary);
  padding: 0.25em 1em;
  margin-bottom: 1em;

  @media (min-width: 600px) {
    grid-column: -1/1;
    grid-row: 2;
    position: relative;
  }

  ${(props) =>
    props.type === "intro-sub" &&
    css`
      display: inline-block;

      @media (min-width: 600px) {
        text-align: right;
        align-self: start;
        left: -1.5rem;
        width: calc(100% + 1em);
      }
    `}

  ${(props) =>
    props.type === "about-me" &&
    css`
      grid-area: subtitle;
      @media (min-width: 600px) {
        left: -1em;
        width: calc(100% + 2em);
        padding-right: calc(200px + 4em);
        padding-left: 1em;
      }
    `}
`;

export default Subtitle;
