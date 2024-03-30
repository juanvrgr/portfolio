import React from "react";
import { StyledAI } from "../styled/StyledAI";
import strings from "./language.js";

export default function AI({ language, dark }) {
  return (
    <StyledAI id="AI" dark={dark}>
      <div className="presentation">
        <h1>
          {strings[language].title.split("").map((char, i) => (
            <span style={{ color: "rgba(122, 170, 215, 0.8)" }} key={char + i}>
              {char}
            </span>
          ))}
        </h1>
        <p className="data">
          {strings[language].data.map((el, i) => (
            <span key={language + i}>
              {el}
              <br />
            </span>
          ))}
        </p>
      </div>
    </StyledAI>
  );
}
