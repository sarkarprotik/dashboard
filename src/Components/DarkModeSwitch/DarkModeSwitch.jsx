import React, { useState } from "react";
import "./DarkModeSwitch.scss";

const DarkModeSwitch = ({ parentMethod }) => {
  const [initialState, setInitialState] = useState(true);

  const handleClick = () => {
    parentMethod();
    setInitialState(!initialState);
  };

  return (
    <div class="wrapper" style={{ zoom: 0.5 }}>
      <div class="toggle">
        <input
          class="toggle-input"
          type="checkbox"
          onChange={() => handleClick()}
        />
        <div class="toggle-bg"></div>
        <div class="toggle-switch">
          <div class="toggle-switch-figure"></div>
          <div class="toggle-switch-figureAlt"></div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeSwitch;
