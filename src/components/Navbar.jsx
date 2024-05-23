import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";

const StyledHeader = styled.header`
  display: flex;
  font-weight: var(--fw-bold);
  margin-bottom: 2em;
  position: sticky;
  top: 0;
`;

function Navbar() {
  return (
    <StyledHeader>
      <Logo />
      {/* <GiHamburgerMenu /> */}
      <MainNav />
    </StyledHeader>
  );
}

export default Navbar;
