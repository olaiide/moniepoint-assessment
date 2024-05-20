import React from "react";
import "./style.css";
const Button = ({ children, style }) => {
  return (
    <button className="button" style={style}>
      {children}
    </button>
  );
};

export default Button;
