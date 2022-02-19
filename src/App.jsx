import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

//コンポーネント
const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage />
      <p style={{ color: "red" }}>こんにちは</p>
      <button onClick={onClickButton}>こんにちは</button>
    </>
  );
};

export default App;
