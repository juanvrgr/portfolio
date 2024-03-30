import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./styled/GlobalStyle";
import Lateral from "../components/Lateral/";
import Nav from "../components/Nav/";
import Home from "./Home/";
import Skills from "./Skills/";
import AI from "./AI/";
import { Projects } from "./Projects";
import Contact from "./Contact";

function App() {
  const [path, setPath] = useState("");
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const switchMode = () => {
    const modeIcon = document.querySelector("#modeIcon");
    modeIcon.style.transform === "rotate(0deg)" || !modeIcon.style.transform
      ? (modeIcon.style.transform = "rotate(-180deg)")
      : (modeIcon.style.transform = "rotate(0)");

    localStorage.setItem("mode", mode === "light" ? "dark" : "light");
    setMode(mode === "light" ? "dark" : "light");
  };

  const changeLanguage = (lang) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
  };

  const handleScroll = () => {
    const { scrollY } = window;
    const home = document.querySelector("#Home").offsetHeight / 2;
    const skills = document.querySelector("#Skills").offsetHeight + home;
    const projects = document.querySelector("#Projects").offsetHeight + skills;
    const ai = document.querySelector("#AI").offsetHeight + projects;
    if (scrollY > ai) {
      return setPath("Contact");
    }
    if (scrollY > projects) {
      return setPath("AI");
    }
    if (scrollY > skills) {
      return setPath("Projects");
    }
    if (scrollY > home) {
      return setPath("Skills");
    }
    if (scrollY < home) {
      return setPath("");
    }
  };

  useEffect(() => {
    document.body.onscroll = handleScroll;
  }, []);

  return (
    <div className="App">
      <GlobalStyle dark={mode === "dark"} />
      <Nav switchMode={switchMode} changeLanguage={changeLanguage} />
      <div style={{ display: "flex" }}>
        <Lateral
          path={path}
          language={language}
          height={Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight
          )}
        />
        <div style={{ flex: 1 }} className="general">
          <Home language={language} dark={mode === "dark"} />
          <Skills />
          <Projects language={language} />
          <AI language={language} />
          <Contact language={language} />
        </div>
      </div>
    </div>
  );
}

export default App;
