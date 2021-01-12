import { render } from "react-dom";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "./useMeasure";
import "./skillSet.css";

function SkillSet() {
  const [open, toggle] = useState(false);
  const [bind, { width }] = useMeasure();
  const props = useSpring({ width: open ? width : 0 });
  return (
    <div className="skill-container">
      <div {...bind} className="main" onClick={() => toggle(!open)}>
        <animated.div className="fill-js" style={props} />
        <animated.div className="content">Javascript</animated.div>
      </div>
      <div {...bind} className="main" onClick={() => toggle(!open)}>
        <animated.div className="fill-rb" style={props} />
        <animated.div className="content">Ruby</animated.div>
      </div>
    </div>
  );
}

export default SkillSet;
