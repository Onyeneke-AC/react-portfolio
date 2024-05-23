import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";

const StyledHeader = styled.header`
  display: flex;
  font-weight: var(--fw-bold);
  margin-bottom: 2em;
`;

function Navbar() {
  return (
    <StyledHeader>
      <Logo />
      <button class="nav-toggle" aria-label="toggle navigation">
        <span class="hamburger"></span>
      </button>
      <MainNav />
    </StyledHeader>
  );
}

export default Navbar;
