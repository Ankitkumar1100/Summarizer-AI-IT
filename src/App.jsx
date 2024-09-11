import React, { useState } from "react";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
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
        {/* Hero now controls the switch */}
        <Hero toggleDarkMode={toggleDarkMode} />
        <Demo />
      </div>
    </main>
  );
};

export default App;
