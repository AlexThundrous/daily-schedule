import React, { createContext, useState } from "react";
import Schedule from "./components/schedule.js";
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <Schedule />
        <div className="toggle">
          <DarkModeToggle
            onChange={() => toggleTheme(theme, setTheme)} isDarkMode={theme === "dark"}
          />
        </div>
        <a href="https://github.com/AlexThundrous/daily-schedule" target="_blank" rel="noopener noreferrer" className="source-link">
          Source
        </a>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;


