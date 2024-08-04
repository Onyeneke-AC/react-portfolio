import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import "./index.css";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />} />
        {/* <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} /> */}
        {/* </Route> */}
        <Route path="project/:projectId" element={<Project />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
