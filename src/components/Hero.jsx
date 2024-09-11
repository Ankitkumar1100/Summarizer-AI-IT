import React from "react";
import { logo } from "../assets";
import Switch from "./Switch";

const Hero = ({ toggleDarkMode }) => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <div className="flex items-center gap-4">
          {/* Move the Switch here next to GitHub button */}
          <Switch onChange={toggleDarkMode} />

          <button
            type="button"
            onClick={() =>
              window.open("https://github.com/Ankitkumar1100/", "_blank")
            }
            className="black_btn"
          >
            GitHub
          </button>
        </div>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="blue_gradient">RAPID APIs</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms long articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
