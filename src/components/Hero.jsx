import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Ansalpandey/IndustrialTrainingProject.git", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='blue_gradient '>OpenAI's GPT-4</span>
      </h1>
      <h2 className='desc'>
      Streamline Your Understanding with Summize: Unleashing Clarity by Condensing Complexity!
      </h2>
    </header>
  );
};

export default Hero;
