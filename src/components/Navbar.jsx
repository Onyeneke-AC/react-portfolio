import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--fw-bold);
  padding: 10px 50px;
  position: sticky;
  top: 0;
  gap: 500px;
  background-color: var(--clr-dark);
  z-index: 1000;
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
