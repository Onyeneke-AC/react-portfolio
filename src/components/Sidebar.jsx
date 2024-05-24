import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

const StyledSidebar = styled.div`
  background-color: #000;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <GiHamburgerMenu />
    </StyledSidebar>
  );
}

export default Sidebar;
