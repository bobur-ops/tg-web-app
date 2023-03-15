import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div {...props} className={`button ` + props.className}>
      Button
    </div>
  );
};

export default Button;
