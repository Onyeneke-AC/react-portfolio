import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
          <Link to="#home" class="nav__link">
            Home
          </Link>
        </li>
        <li class="nav__item">
          <Link to="#services" class="nav__link">
            My Services
          </Link>
        </li>
        <li class="nav__item">
          <Link to="#about" class="nav__link">
            About Me
          </Link>
        </li>
        <li class="nav__item">
          <Link to="#work" class="nav__link">
            My Work
          </Link>
        </li>
      </StyledList>
    </StyledNav>
  );
}

export default MainNav;
