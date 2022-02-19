import React from "react";
import App from "../App";

//コンポーネントの引数にpropsを設定
export const ColorfulMessage = (props) => {
  //毎回propsを指定しなくて済むように分割代入を行う
  const { children, color } = props;

  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};
