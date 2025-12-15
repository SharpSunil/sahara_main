"use client";

import React from "react";
import "./borders.scss";
import ThemeStore from "../store/Theme";

const GreyBorder = ({ flip, margin }) => {
  const { isDarkMode } = ThemeStore();

  return (
    <div
      className={`parent grey-border ${flip ? "flip" : ""} ${
        !isDarkMode ? "lightgrey" : ""
      }`}
      style={{
        marginTop: margin,
      }}
    ></div>
  );
};

export default GreyBorder;