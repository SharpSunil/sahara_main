"use client";

import React, { useState } from "react";
import "./borders.scss";
import ThemeStore from "../store/Theme";


const BlackBorder = (props) => {
  const [flip, setFlip] = useState(props.flip);
  const { isDarkMode, toggleTheme } = ThemeStore();

  return (
    <div
      className={`parent black-border ${flip ? "flip" : ""} ${
        !isDarkMode ? "white" : ""
      }`}
      style={{
        marginTop: props.margin,
      }}
       

    ></div>
  );
};

export default BlackBorder;