import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import Introduction from "./Introduction";
import MyServices from "./MyServices";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";

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
        <Introduction />
        <MyServices />
        <AboutMe />
        <MyWork />
      </StyledMain>
      <Footer />
    </div>
  );
}

export default AppLayout;
