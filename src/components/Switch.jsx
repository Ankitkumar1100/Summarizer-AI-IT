import React from "react";
import styled from "styled-components";

const Switch = ({ onChange }) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" onChange={onChange} />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.5em;
    width: 1.5em;
    left: 0.25em;
    bottom: 0.25em;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(1.5em);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 2em;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default Switch;
