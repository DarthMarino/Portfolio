import React, { useState } from "react";
import "./App.css";
import Jumbotron from "./components/jumbotron/jumbotron";
import NavigationBar from "./components/navigationBar/navigationBar";
import ProjectBox from "./components/projectBox/project-box";
import { Squash as Hamburger } from "hamburger-react";
import Gallery from "./components/gallery/gallery";
import SkillSet from "./components/skills/skillSet";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <NavigationBar toggled={isToggled} />
      <button title="Open Menu" className="button-menu" onClick={toggleHandler}>
        <Hamburger rounded label="Show menu" size={45} />
      </button>
      <Jumbotron />
      <SkillSet />
    </>
  );
}

export default App;
