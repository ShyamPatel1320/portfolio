import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data + AIML Solutions Architect",
          "Turning Gaps into Growth",
          "Agentic AI & Automation Engineer",
          "Data Visibility Expert",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
