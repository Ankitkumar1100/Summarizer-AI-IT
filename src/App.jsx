// App.jsx
import React, { useState } from "react";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Switch from "./components/Switch";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <main className={darkMode ? "dark-mode" : ""}>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        {/* Dark mode switch at the top right corner */}
        <div className="flex justify-between w-full mb-1">
          <h2></h2>
          <Switch onChange={toggleDarkMode} />
        </div>
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
