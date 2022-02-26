import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //stateを実装
  const [todoText, setTodoText] = useState("333");
  //未完了

  const [incompleteTodos, seiIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  //入力文字の反映
  const onchageTodoText = (event) => {
    setTodoText(event.target.value);
  };

  //クリックイベント
  const onClickAdd = () => {
    if (todoText !== "") {
      const newTodos = [...incompleteTodos, todoText];
      seiIncompleteTodos(newTodos);
      setTodoText("");
    } else {
      return;
    }
  };
  //削除
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    seiIncompleteTodos(newTodos);
  };

  //完了
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    seiIncompleteTodos(newIncompleteTodos);
  };

  //戻す
  const onClickReturn = (index) => {
    const newcompletetask = [...completeTodos];
    newcompletetask.splice(index, 1);

    const newInCompletetask = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newcompletetask);
    seiIncompleteTodos(newInCompletetask);
  };

  // const seiIncompleteTodos　＝　　（）
  return (
    <>
      <div className="input-area">
        <input
          placeholder="Todoを入力"
          value={todoText}
          onChange={onchageTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTodo</p>
        <ul>
          {completeTodos.map((completetask, index) => {
            return (
              <div key={completetask} className="list-row">
                <li>{completetask}</li>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
}
