import React from "react";
import CoolCoinLogo from "../coolCoinLogo/coolCoinLogo";
import { useSpring, animated } from "react-spring";
import "./jumbotron.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Jumbotron() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className="jumbobox">
      <div className="jumbobox-image">
        <h1 className="jumbotron-h1">Marino Gómez</h1>

        <div className="logo-container" title="Click Me!!!">
          <animated.div
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          >
            <CoolCoinLogo />
          </animated.div>
        </div>
        <h2 className="jumbotron-h2">
          Im just a Developer with a code launcher.
        </h2>
      </div>
    </div>
  );
}

export default Jumbotron;
