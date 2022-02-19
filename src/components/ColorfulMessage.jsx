import React from "react";
import App from "../App";

const ColorfulMessage = () => {
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <p style={contentStyle}>こんにちは</p>
    </>
  );
};

export default ColorfulMessage;
