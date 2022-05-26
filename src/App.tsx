import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App () {
  const routing = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
  ]);
  return (
    <>{ routing }</>
  );
}

export default App;
