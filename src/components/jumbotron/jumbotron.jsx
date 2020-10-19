import React from "react";
import CoolCoinLogo from "../coolCoinLogo/coolCoinLogo";
import "./jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbobox">
      <div className="jumbobox-image">
        <h1>Buenos dias Mandy</h1>

        <div className="logo-container">
          <CoolCoinLogo />
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
