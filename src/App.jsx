import React, { useState, useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

//コンポーネント
const App = () => {
  //state一覧
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  //カウント処理
  const onClickCountButton = () => {
    setNum(num + 1);
    console.log(num);
  };

  const onClickfaceShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">電気ですよ</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="お元気です" /> */}
      <p style={{ color: "red" }}>こんにちは</p>
      <button onClick={onClickCountButton}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickfaceShowFlag}>on/off</button>
      {faceShowFlag ? <p>( ^ω^ )</p> : <p>( )</p>}
    </>
  );
};

export default App;
