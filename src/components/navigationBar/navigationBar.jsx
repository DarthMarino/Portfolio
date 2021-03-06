import React from "react";
import { animated, useSpring } from "react-spring";
import "./navigationBar.css";

function NavigationBar({ toggled }) {
  const { x } = useSpring({
    x: toggled ? 0 : 100,
  });
  return (
    <animated.div
      className="nav-wrapper"
      style={{ transform: x.interpolate((x) => `translate3d(${x * -1}%,0,0)`) }}
    >
      <nav>
        <a className="nav-item" href="#">
          Home
        </a>
        <a className="nav-item" href="#">
          About
        </a>
        <a className="nav-item"  href="#">
          Projects
        </a>
      </nav>
    </animated.div>
  );
}

export default NavigationBar;
