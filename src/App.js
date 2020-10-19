import React, { useState } from "react";
import "./App.css";
import Jumbotron from "./components/jumbotron/jumbotron";
import NavigationBar from "./components/navigationBar/navigationBar";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <NavigationBar toggled={isToggled} />
      <button className="button-menu" onClick={toggleHandler}>
        &#9776;
      </button>
      <Jumbotron />
    </>
  );
}

export default App;
