import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/" />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="project/:projectId" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
