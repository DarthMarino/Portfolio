import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import "./coolCoinLogo.css";

function CoolCoinLogo() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 200, friction: 40 },
  });
  return (
    <div onClick={() => set((state) => !state)}>
      <a.div
        className="c back"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      />
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(0deg)`),
        }}
      />
    </div>
  );
}

export default CoolCoinLogo;
