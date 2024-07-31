import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--fw-bold);
  padding: 10px 50px;
  position: sticky;
  top: 0;
  right: 0;
  background-color: var(--clr-dark);
  z-index: 1000;
`;

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <StyledHeader>
      <Logo />
      {width >= 600 ? <MainNav /> : <Sidebar />}
    </StyledHeader>
  );
}

export default Navbar;
