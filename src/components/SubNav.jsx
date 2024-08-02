import { useEffect } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  background: var(--clr-dark);
  color: var(--clr-light);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  ${(props) =>
    css`
      transform: ${props.isOpen ? "translateX(0)" : "translateX(-100%)"};
    `}
  transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
  cursor: initial;
  /* font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif; */
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  font-weight: var(--fw-bold);
  font-size: var(--fs-h2);
  cursor: pointer;

  &:hover {
    color: var(--clr-accent);
  }
`;

const StyledClose = styled.button`
  color: var(--clr-accent);
  font-size: 25px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 30px;
  background: none;
  border: none;
  text-align: center;
  cursor: pointer;
`;

function SubNav({ type = "normal", isOpen, onOpen }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <StyledNav isOpen={isOpen}>
        <StyledClose
          onClick={() => {
            onOpen(false);
          }}
        >
          <span style={{ fontSize: "40px" }}>
            <HiOutlineXMark />
          </span>
          close
        </StyledClose>
        <StyledList>
          <li>
            <StyledNavLink to="#Home">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="#Services">Services</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="#About">About Me</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="#Work">My Work</StyledNavLink>
          </li>
        </StyledList>
      </StyledNav>
    </>
  );
}

export default SubNav;
