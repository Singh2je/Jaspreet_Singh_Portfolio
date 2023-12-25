import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Project Manager",
          "Continous Improvement and learning "
        ],
        autoStart: true,
        delay:43,
        loop: true,
        deleteSpeed: 15,
      }}
    />
  );
}

export default Type;
