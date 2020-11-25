import React from "react";
import "./card.css";
const Card = () => {
  return (
    <div className="card">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Project Preview"
        className="card-image"
      />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};
export default Card;
