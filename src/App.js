import React, { useState } from "react";
import "./App.css";
import Jumbotron from "./components/jumbotron/jumbotron";
import NavigationBar from "./components/navigationBar/navigationBar";
import { Squash as Hamburger, Squash } from "hamburger-react";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <NavigationBar toggled={isToggled} />
      <button title="Open Menu" className="button-menu" onClick={toggleHandler}>
        <Squash rounded label="Show menu" size={45} />
      </button>
      <Jumbotron />
    </>
  );
}

export default App;
