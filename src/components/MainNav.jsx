import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  align-items: center;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--clr-light);
`;

function MainNav() {
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
    <StyledNav>
      <StyledList>
        <li class="nav__item">
          <StyledNavLink to="#home">Home</StyledNavLink>
        </li>
        <li class="nav__item">
          <StyledNavLink to="#services">Services</StyledNavLink>
        </li>
        <li class="nav__item">
          <StyledNavLink to="#about">About Me</StyledNavLink>
        </li>
        <li class="nav__item">
          <StyledNavLink to="#work">My Work</StyledNavLink>
        </li>
      </StyledList>
    </StyledNav>
  );
}

export default MainNav;
