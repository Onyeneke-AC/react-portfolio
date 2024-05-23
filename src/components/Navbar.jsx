import styled from "styled-components";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  display: flex;
  font-weight: var(--fw-bold);
  margin-bottom: 2em;
`;

function Navbar() {
  return (
    <StyledHeader>
      <div class="logo">
        <img src="./img/my_logo.png" alt="" />
      </div>
      <button class="nav-toggle" aria-label="toggle navigation">
        <span class="hamburger"></span>
      </button>
      <MainNav />
    </StyledHeader>
  );
}

export default Navbar;
