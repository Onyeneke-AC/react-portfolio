import { useNavigate } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import Introduction from "../components/Introduction";
import MyServices from "../components/MyServices";
import MyWork from "../components/MyWork";
import { useEffect } from "react";

function Home() {
  // const navigate = useNavigate();

  // useEffect(() => {}, []);
  return (
    <>
      <Introduction />
      <MyServices />
      <AboutMe />
      <MyWork />
    </>
  );
}

export default Home;
