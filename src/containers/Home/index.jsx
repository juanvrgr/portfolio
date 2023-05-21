import React from "react";
import { StyledHome } from "../styled/StyledHome";
import github from "../../utils/img/github.png";
import linkedin from "../../utils/img/linkedin.png";
import whatsapp from "../../utils/img/whatsapp.png";
import { links } from "../../utils/links.js";
import strings from "./language.js";
import en from "../../utils/resume/en.pdf";
import es from "../../utils/resume/es.pdf";

export default function Home({ language, dark }) {
  const resumes = { en, es };

  return (
    <StyledHome id="Home" dark={dark}>
      <div className="social">
        <a href={links.github} target="_blank">
          <img src={github} alt="github logo" className="icon" />
        </a>
        <a href={links.linkedin} target="_blank">
          <img src={linkedin} alt="linkedin logo" className="icon" />
        </a>
        <a href={links.whatsapp} target="_blank">
          <img src={whatsapp} alt="whatsapp logo" className="icon" />
        </a>
      </div>

      <div className="presentation">
        <h1>
          {strings[language].title.split("").map((char, i) => (
            <span className="title name" key={char + i}>
              {char}
            </span>
          ))}
        </h1>
        <h2 className="subtitle">
          {strings[language].subtitle}{" "}
          {
            language === 'en' &&
            <span style={{ color: "rgba(122, 170, 215, 0.8)" }}>+2 years of experience</span>
          }
          {
            language === 'es' &&
            <span style={{ color: "rgba(122, 170, 215, 0.8)" }}>+2 años de experiencia</span>
          }
        </h2>
        <p className="data">
          {strings[language].data.map((el, i) => (
            <span key={language + i}>
              {el}
              <br />
            </span>
          ))}
        </p>
        <a href={resumes[language]} download={true} className="button">
          {strings[language].resume}
        </a>
      </div>

      <span className="openTag">{"<Portfolio>"}</span>
    </StyledHome>
  );
}
