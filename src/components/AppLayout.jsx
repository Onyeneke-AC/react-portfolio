import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

function AppLayout() {
  return (
    <div>
      <Navbar />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </div>
  );
}

export default AppLayout;
