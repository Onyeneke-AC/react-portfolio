import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 0.5em 2.5em;
  background: var(--clr-accent);
  color: var(--clr-dark);
  text-decoration: none;
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: var(--fw-bold);
  transition: transform 200ms ease-in-out;
`;

export default ButtonLink;
