import { createContext, useContext, useEffect, useState } from "react";

const WindowWidthContext = createContext();

function WindowWidthProvider({ children }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    document.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowWidthContext.Provider value={{ width }}>
      {children}
    </WindowWidthContext.Provider>
  );
}

function useWindowWidth() {
  const context = useContext(WindowWidthContext);

  if (context === "undefined")
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { WindowWidthProvider, useWindowWidth };
