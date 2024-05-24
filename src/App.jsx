import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import "./index.css";
import { WindowWidthProvider } from "./context/NavbarContext";

function App() {
  return (
    <WindowWidthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="project/:projectId" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WindowWidthProvider>
  );
}

export default App;
