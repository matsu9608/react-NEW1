import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { InCompleteTodo } from "./components/inCompleteTodo";
import { CompleteTodo } from "./components/completeTodo";

export default function App() {
  //stateを実装
  const [todoText, setTodoText] = useState("");
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
      <InputTodo
        todoText={todoText}
        onChange={onchageTodoText}
        onClick={onClickAdd}
      />

      <InCompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo
        completetask={completeTodos}
        onClickReturn={onClickReturn}
      />
      <div></div>
    </>
  );
}
