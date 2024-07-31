import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import SubNav from "./SubNav";
import { useState } from "react";

const StyledSidebar = styled.button`
  background: none;
  color: var(--clr-accent);
  font-size: 25px;
  cursor: pointer;
  border: none;
`;

function Sidebar() {
  const [open, setIsOpen] = useState(false);

  return (
    <StyledSidebar
      onClick={() => {
        setIsOpen(!open);
      }}
    >
      <GiHamburgerMenu />
      <SubNav type="side" isOpen={open} onOpen={setIsOpen} />
    </StyledSidebar>
  );
}

export default Sidebar;
