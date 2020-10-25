import React from "react";
import { useSpring, animated } from "react-spring";
import "./biography.css";

function Biography() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className="bio">
      <div>
        <h1 className="cool-title">About Me</h1>
        <p className="bio-p">
          I'm 21 and a <b className="cool-gradient">Software Developer. </b>I do
          web projects using react and node
        </p>
      </div>
    </div>
  );
}

export default Biography;
