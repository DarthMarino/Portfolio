import React from "react";
import CoolCoinLogo from "../coolCoinLogo/coolCoinLogo";
import { useSpring, animated } from "react-spring";
import "./jumbotron.css";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Jumbotron() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className="jumbobox">
      <h1 className="jumbotron-h1">Marino Gómez</h1>

      <div className="logo-container" title="Click Me">
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <CoolCoinLogo />
        </animated.div>
      </div>
      <p className="bio-p">
        I'm 21 and a <b className="cool-gradient">Software Developer. </b>I do
        web projects using react and node
      </p>
      <p>
        <a href="https://github.com/DarthMarino">
          <img
            className="social-icon"
            border="0"
            alt="Github"
            src={Github}
            width="60"
            height="60"
          />
        </a>
        <a href="https://www.linkedin.com/in/marino-gomez-hernandez/?locale=en_US">
          <img
            className="social-icon"
            border="0"
            alt="Linkedin"
            src={Linkedin}
            width="60"
            height="60"
          />
        </a>
      </p>
    </div>
  );
}

export default Jumbotron;
